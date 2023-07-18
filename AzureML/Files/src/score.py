import os
import logging
import json
import numpy

import tensorflow as tf

def init():
    """
    This function is called when the container is initialized/started, typically after create/update of the deployment.
    You can write the logic here to perform init operations like caching the model in memory
    """
    global model
    # AZUREML_MODEL_DIR is an environment variable created during deployment.
    # It is the path to the model folder (./azureml-models/$MODEL_NAME/$VERSION)
    # Please provide your model's folder name if there is one

    logging.info(os.getenv("AZUREML_MODEL_DIR"))

    model_path = os.path.join(
        os.getenv("AZUREML_MODEL_DIR"), "CtoF_Model.h5"
    )
    logging.info(model_path)
    # deserialize the model file back into a sklearn model
    model = tf.keras.models.load_model(model_path )
    logging.info("Init complete")


def run(raw_data):
    """
    This function is called for every invocation of the endpoint to perform the actual scoring/prediction.
    In the example we extract the data from the json input method and return the result back
    Example: { "data": [10] }
    """
    logging.info("model 1: request received")
    data = json.loads(raw_data)["data"]
    data = numpy.array(data)
    result = model.predict(data)
    logging.info("Request processed")
    return result.tolist()