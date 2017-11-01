import gym
import tempfile
import numpy as np

from gym import wrappers

tdir = tempfile.mkdtemp()
env = gym.make('FrozenLake-v0')
env = wrappers.Monitor(env,tdir,force=True)

S = range(env.env.env.nS)
A = range(env.env.env.nA)
P = env.env.env.P

#Print out MDP
#for idx in range(len(P)):
#    state = P[idx]
#    print "State: %s" % idx
#    for action_idx in range(len(state)):
#        actions = state[action_idx]
#        print "     Action: %s" % action_idx
#        for probs in range(len(actions)):
#            prob = actions[probs]
#            probablity = prob[0]
#            new_state = prob[1]
#            reward = prob[2]
#            donzo = prob[3]
#            print "          " + str(prob)



#http://incompleteideas.net/sutton/book/ebook/node65.html
#Initialize Q(s,a) arbitrarily
#Repeat (for each episode)
#   Initailize s
#   Repeat (for each step of episode)
#       Choose a from s using policy derived from Q (e.g., e-greedy)
#       Take action a, observe r,s'
#       Q(s,a) <= Q(s,a) + alpha[r + gamma maxa Q(s',a') - Q(s,a)]
#       s <- s'
#   until s is terminal

#MUST EXPLORE ENOUGH
#HW4: Do something special with epsilon to solve issue

#Epsilon: Exploration
#Epsilon Decay: Greedy
def q_learning(env, alpha=0.8, gamma=0.9,  epsilon=0.99, epsilon_decay=0.99999):
    nS = env.env.env.nS
    nA = env.env.env.nA
    #From Sutton's Book
    #env.step to interact with the environment
    Q = np.zeros((nS,nA), dtype=np.float)
    for e in range(10000):
        state = env.reset()
        total_reward = 0
        while True:
            #if Q[state][0] == 0 and Q[state][1] == 0 and Q[state][2] == 0 and Q[state][3] == 0:
            #    action = env.env.action_space.sample()
            #else:
            #    action = np.argmax(Q[state])
            #IF random number is less than epsilon grab the random action else grab the argument max of Q[state]
            action = env.env.action_space.sample() if np.random.random() < epsilon else np.argmax(Q[state])
            nstate, reward, done, infor = env.step(action)
            total_reward += reward
            #if nstate == 14:
            #    print "14"
            #elif nstate == 15:
            #    print "15"
            #Q Function Update
            #(not done) keeps the terminal state as 0
            Q[state][action] += alpha * (reward + gamma * Q[nstate].max() * (not done) - Q[state][action])
            #Q[state][action] = Q[state][action] + alpha * (reward + gamma * np.max(Q[nstate]) - Q[state][action])
            state = nstate
            epsilon *= epsilon_decay
            if done:
                break
    pi = np.argmax(Q, axis=1)
    return pi,Q

pi, Q = q_learning(env)
print(pi,Q)
#print (pi,V)



env.close()
gym.upload(tdir, api_key = 'sk_4hbReZHkQFqRUBZ1beREWg')
