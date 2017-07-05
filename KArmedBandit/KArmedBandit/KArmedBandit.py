#K-Armed Bandit
#http://incompleteideas.net/sutton/book/ebook/node16.html
import numpy as np
import matplotlib.pyplot as plt
from Bandit import *

def process_bandit(epsilon, bandit_count, plays):
    optimal_action = np.zeros(plays)
    average_reward = np.zeros(plays)
    for n in range(bandit_count):
        bandit = Bandit(10,epsilon)
        for play in range(plays):
            arm = bandit.get_arm() #Get arm to pull
            reward = bandit.get_reward(arm) #Calculate Reward
            bandit.update_estimate_values(arm,reward) #Update estimate values
            avg_r = bandit.get_average_reward() #Find max reward
            average_reward[play] += avg_r
            if bandit.best_action(arm):
                optimal_action[play] += 1
        if n > 0 and n % 100 == 0:
            print("Loop: ",n)
    optimal_action /= bandit_count
    average_reward /= bandit_count
    return optimal_action, average_reward


def kArmedEpsilonGreedy():
    """Figure 2.1"""
    tasks = 2000
    plays = 1000

    optimal_action00, average_reward00 = process_bandit(0, tasks, plays)
    optimal_action01, average_reward01 = process_bandit(0.1, tasks, plays)
    optimal_action001, average_reward001 = process_bandit(0.01, tasks, plays)
    
    plt.plot(average_reward00,label='E=0')
    plt.plot(average_reward01,label='E=0.1')
    plt.plot(average_reward001,label='E=0.01')
    plt.xlabel("Plays")
    plt.ylabel("Average reward")
    plt.legend()
    plt.show()

    plt.plot(optimal_action00,label="e=0 (greedy)")
    plt.plot(optimal_action01,label="e=0.1 (greedy)")
    plt.plot(optimal_action001,label="e=0.01 (greedy)")
    plt.xlabel("Plays")
    plt.ylabel("% Optimal Action")
    plt.legend()
    plt.show()

def process_optimistic_bandit(epsilon, bandit_count, plays, initial):
    optimal_action = np.zeros(plays)
    average_reward = np.zeros(plays)
    for n in range(bandit_count):
        bandit = OptimisticValueBandit(10,epsilon,initial)
        for play in range(plays):
            arm = bandit.get_arm() #Get arm to pull
            reward = bandit.get_reward(arm) #Calculate Reward
            bandit.update_estimate_values(arm,reward) #Update estimate values
            avg_r = bandit.get_average_reward() #Find max reward
            average_reward[play] += avg_r
            if bandit.best_action(arm):
                optimal_action[play] += 1
        if n > 0 and n % 100 == 0:
            print("Loop: ",n)
    optimal_action /= bandit_count
    average_reward /= bandit_count
    return optimal_action, average_reward

def OptimisticGreedy():
    """Figure 2.4"""
    tasks = 2000
    plays = 1000

    optimal_action00, average_reward00 = process_optimistic_bandit(0, tasks, plays, 5)
    optimal_action01, average_reward01 = process_optimistic_bandit(0.1, tasks, plays, 0)
    
    plt.plot(average_reward00,label='E=0')
    plt.plot(average_reward01,label='E=0.1')
    #plt.plot(average_reward001,label='E=0.01')
    plt.xlabel("Plays")
    plt.ylabel("Average reward")
    plt.legend()
    plt.show()

    plt.plot(optimal_action00,label="Q0=5, e=0 (greedy)")
    plt.plot(optimal_action01,label="Q0=0, e=0.1 (greedy)")
    #plt.plot(optimal_action001,label="e=0.01 (greedy)")
    plt.xlabel("Plays")
    plt.ylabel("% Optimal Action")
    plt.legend()
    plt.show()


if __name__ == "__main__":
    #kArmedEpsilonGreedy()
    OptimisticGreedy()
