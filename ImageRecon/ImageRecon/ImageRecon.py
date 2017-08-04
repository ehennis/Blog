#To Suppress TF warning
import os, sys
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'

import tensorflow as tf

#Tensorboard: python -m tensorflow.tensorboard --logdir training_summaries &
#TO TRAIN:
#python retrain.py --bottleneck_dir=bottlenecks --how_many_training_steps=5000 --model_dir=inception --summaries_dir=training_summaries\basics --output_graph=retrained_graph.pb --output_labels=retrained_labels.txt --image_dir=fish

with tf.gfile.FastGFile("retrained_graph.pb",'rb') as f:
    graph_def = tf.GraphDef()
    graph_def.ParseFromString(f.read())
    tf.import_graph_def(graph_def, name='')

def test_image(img_path):    
    #Load Lables
    label_lines = [line.rstrip() for line in tf.gfile.GFile("retrained_labels.txt")]
    #Read in the data
    image_data = tf.gfile.FastGFile('test\\'+img_path, 'rb').read()

    with tf.Session() as sess:
        softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')

        predictions = sess.run(softmax_tensor, {'DecodeJpeg/contents:0': image_data})

        top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]
        print('Testing:',img_path)
        for node_id in top_k:
            human_string = label_lines[node_id]
            score = predictions[0][node_id]
            print('\t%s (score = %.5f)' % (human_string,score))

test_image('muskie.jpg')
test_image('northern.jpg')
test_image('article.jpg')
test_image('bass.jpg')
test_image('walleye.jpg')

#Next Steps: https://codelabs.developers.google.com/codelabs/tensorflow-for-poets-2/#0