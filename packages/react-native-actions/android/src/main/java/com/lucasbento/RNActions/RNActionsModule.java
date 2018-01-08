
package com.lucasbento.RNActions;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

import java.net.URL;

public class RNActionsModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNActionsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNActions";
  }

  private ReactInstanceManager getReactInstanceManager() {
    ReactApplication reactApplication = (ReactApplication)getCurrentActivity().getApplication();
    return reactApplication.getReactNativeHost().getReactInstanceManager();
  }

  private DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }

  @ReactMethod
  public void getHostUrl(final Promise promise) {
    try {
      URL url = new URL(getDevSupportManager().getSourceUrl());
      String protocol = url.getProtocol();
      String host = url.getHost();

      promise.resolve(String.format("%s://%s", protocol, host));
    } catch(Exception e) {
      promise.reject(e);
    }
  }
}