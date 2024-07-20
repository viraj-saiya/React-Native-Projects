package com.testing.flash;

import android.content.pm.PackageManager;

import com.facebook.react.bridge.Callback;

import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

import com.facebook.react.bridge.ReactMethod;



public class FlashModule extends ReactContextBaseJavaModule

{

    /**

     * Member Variables

     */

    private final ReactApplicationContext reactContext;

    /**

     * Constructor

     *

     * @param reactContext ReactApplicationContext

     */

    public FlashModule(ReactApplicationContext reactContext) {

        super(reactContext);

        this.reactContext = reactContext;

    }



    @Override

    public String getName() {

        return "Flash";

    }



    @ReactMethod

    public void hasFlash(Callback successCallback, Callback errorCallback) {

        // Check for whether the device has a flash or not

        if (reactContext.getApplicationContext().getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH)) {

            successCallback.invoke();

        }

        else {

            errorCallback.invoke();

        }

    }

}
