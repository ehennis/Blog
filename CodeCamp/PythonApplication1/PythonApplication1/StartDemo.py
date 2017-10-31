import gym
env = gym.make("LunarLander-v2")
state = env.reset()
for i in range(100):
    action = env.action_space.sample()
    nstate, reward, done, info = env.step(action)
    env.render()




