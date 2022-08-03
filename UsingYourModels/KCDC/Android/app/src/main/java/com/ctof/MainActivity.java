package com.ctof;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

// TensorFlow Lite
import org.tensorflow.lite.Interpreter;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText editTextCelsius;
    private TextView txtFahrenheit;
    private Button btnCalc;

    private File TFLiteModel;

    //Fahrenheit:
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextCelsius = (EditText) findViewById(R.id.editTextCelsius);
        txtFahrenheit = (TextView) findViewById(R.id.txtFahrenheit);
        btnCalc = (Button) findViewById(R.id.btnCalc);

        btnCalc.setOnClickListener(this);

        String configdir = this.getFilesDir().getAbsolutePath();
        String fullpath = configdir + "/CtoF_Model.tflite";

        TFLiteModel = new File(fullpath);
        if(!TFLiteModel.exists()) {
            InputStream input = null;
            OutputStream output = null;
            try{
                input = getAssets().open("CtoF_Model.tflite");
                output = new BufferedOutputStream(new FileOutputStream(TFLiteModel.getPath()));
                // Actually do the write
                byte[] bytes = new byte[2048];
                int read;
                while((read = input.read(bytes)) != -1){
                    output.write(bytes, 0, read);
                }
            } catch (IOException io){

            }finally {
                try {
                    if (input != null)
                        input.close();
                    if (output != null)
                        output.close();
                } catch (IOException ignored) {}
            }
        }
    }

    @Override
    public void onClick(View v){
        switch (v.getId()) {
            case R.id.btnCalc:
                String celStr = editTextCelsius.getText().toString();
                float[] input = new float[1];
                input[0] = Float.parseFloat(celStr);

                try {
                    Interpreter intp = new Interpreter(TFLiteModel);
                    float[][] out = new float[1][1];
                    intp.run(input, out);
                    intp.close();
                    float results = out[0][0];

                    String res = String.format("Fahrenheit: %.2f", results);
                    txtFahrenheit.setText(res);
                } catch (Exception ex) {
                    Log.d("TensorFlow Failure",ex.toString());
                }
                break;
        }
    }
}