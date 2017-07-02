import numpy as np
import matplotlib.pyplot as plt
import gym

def CheckInitialValues():
    env = gym.make('CartPole-v0')
    state = env.reset()
    actions = env.action_space
    env.close()
    print (state)
    print (actions)

def CheckRandomValues():
    runs = []
    env = gym.make('CartPole-v0')
    for e in range(10000):
        state = env.reset()
        while True:
            runs.append(state)
            #Random Action
            action = env.action_space.sample()
            state, reward, done, info = env.step(action)
            if done:
                break;
    env.close()
    x_vals = np.array(runs)[:,0]#Grab first column
    x_dot_vals = np.array(runs)[:,1]#Grab second column
    theta_vals = np.array(runs)[:,2]#Grab third column
    theta_dot_vals = np.array(runs)[:,3]#Grab fourth column
    y = np.zeros_like(x_vals)

    #Print Ranges
    print("X: Minimum:",np.min(x_vals)," Maximum:",np.max(x_vals))
    print("XD: Minimum:",np.min(x_dot_vals)," Maximum:",np.max(x_dot_vals))
    print("T: Minimum:",np.min(theta_vals)," Maximum:",np.max(theta_vals))
    print("TD: Minimum:",np.min(theta_dot_vals)," Maximum:",np.max(theta_dot_vals))

    #Actual Values
    x_exact_low = (env.observation_space.low/2)[0]
    x_exact_high = (env.observation_space.high/2)[0]
    theta_exact_low = (env.observation_space.low/2)[2]
    theta_exact_high = (env.observation_space.high/2)[2]
    print('('+str(x_exact_low)+','+str(x_exact_high)+') and ('+str(theta_exact_low)+','+str(theta_exact_high)+')')

    #Range from low to high and return 5 spots
    x_disc = np.linspace(x_exact_low, x_exact_high, 5, False)
    print(x_disc)

if __name__ == "__main__":
    CheckRandomValues()