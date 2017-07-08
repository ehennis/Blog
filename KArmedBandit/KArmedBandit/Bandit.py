import numpy as np
import math

class Bandit(object):
    """Bandit Class"""
    def __init__(self, arms, epsilon):
        self.arms = arms
        self.K = np.zeros(arms)
        self.epsilon = epsilon
        self.estimate_values = np.zeros(arms) #Initialize to 0 at the start
        self.q_star = np.random.normal(0,math.sqrt(1),arms) #Normal distribution with mean 0 and variance 1
        self.optimal_action = np.argmax(self.q_star)
        

    def get_arm(self):
        #Randomly determine if we are going to explore or exploit
        if np.random.random() > self.epsilon:
            #Exploit
            return np.argmax(self.estimate_values)
        else:
            #Explore
            return np.random.randint(0,self.arms)

    def get_reward(self, arm):
        #Normal (Guassian) probabilty of mean Q* and variance 1
        reward = np.random.normal(self.q_star[arm],math.sqrt(1)) 
        return reward

    def update_estimate_values(self, arm, reward):
        self.K[arm] += 1
        k = self.K[arm]
        #Set new reward (r1 + r2 ... ra)/ka
        current_total = self.estimate_values[arm]
        #(k-1/k)* current_total + (1/k) * reward
        #self.estimate_values[arm] = ((k-1) / float(k)) * current_total + (1/float(k)) * reward
        self.update_est(arm, k, current_total, reward)
    
    def update_est(self, arm, k, current_total, reward):
        self.estimate_values[arm] = ((k-1) / float(k)) * current_total + (1/float(k)) * reward

    def best_action(self, arm):
        return self.optimal_action == arm

class OptimisticValueBandit(Bandit):
    """k-armed bandit with Optimistic Value initialization"""
    def __init__(self, arms, epsilon, initial):
        super().__init__(arms, epsilon)
        self.estimate_values[:] = initial #Set initial value
        self.step_size = 0.1 #Set alpha to 0.1

    def update_est(self, arm, k, current_total, reward):
        self.estimate_values[arm] += self.step_size * (reward - current_total)
        