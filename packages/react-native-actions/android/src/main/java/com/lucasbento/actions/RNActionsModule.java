package com.lucasbento.actions;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.packagerconnection.PackagerConnectionSettings;

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

  @ReactMethod
  public void getHostUrl(Promise promise) {
    PackagerConnectionSettings settings = new PackagerConnectionSettings(this.reactContext);

    String host = settings.getDebugServerHost();

    promise.resolve(host.substring(0, host.lastIndexOf(':')));
  }
}