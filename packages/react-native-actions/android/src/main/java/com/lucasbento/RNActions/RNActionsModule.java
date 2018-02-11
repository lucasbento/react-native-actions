
package com.lucasbento.RNActions;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import com.facebook.react.bridge.LifecycleEventListener;

import java.net.URL;

public class RNActionsModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;
  private LifecycleEventListener mLifecycleEventListener = null;


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

//  @ReactMethod
//  private void reload(final Promise promise) {
//    clearLifecycleEventListener();
//    try {
//      final ReactInstanceManager instanceManager = resolveInstanceManager();
//      if (instanceManager == null) {
//        return;
//      }
//
//      new Handler(Looper.getMainLooper()).post(new Runnable() {
//        @Override
//        public void run() {
//          try {
//            instanceManager.recreateReactContextInBackground();
//          } catch (Exception e) {
//            promise.reject(e);
//          }
//        }
//      });
//    } catch (Exception e) {
//      promise.reject(e);
//    }
//  }
//
//  private ReactInstanceManager resolveInstanceManager() throws NoSuchFieldException, IllegalAccessException {
//    ReactInstanceManager instanceManager = getReactInstanceManager();
//    if (instanceManager != null) {
//      return instanceManager;
//    }
//
//    final Activity currentActivity = getCurrentActivity();
//    if (currentActivity == null) {
//      return null;
//    }
//
//    ReactApplication reactApplication = (ReactApplication) currentActivity.getApplication();
//    instanceManager = reactApplication.getReactNativeHost().getReactInstanceManager();
//
//    return instanceManager;
//  }
//
//
//  private void clearLifecycleEventListener() {
//    // Remove LifecycleEventListener to prevent infinite restart loop
//    if (mLifecycleEventListener != null) {
//      getReactApplicationContext().removeLifecycleEventListener(mLifecycleEventListener);
//      mLifecycleEventListener = null;
//    }
//  }

//  @ReactMethod
//  public void reload(final Promise promise) {
//    try {
//      UiThreadUtil.runOnUiThread(new Runnable() {
//        @Override
//        public void run() {
//          getDevSupportManager().handleReloadJS();
//        }
//      });
//
//      promise.resolve("");
//    } catch(Exception e) {
//      promise.reject(e);
//    }
//  }

  @ReactMethod
  public void openDevMenu(final Promise promise) {
    try {
      UiThreadUtil.runOnUiThread(new Runnable() {
        @Override
        public void run() {
          getDevSupportManager().showDevOptionsDialog();
        }
      });

      promise.resolve("");
    } catch(Exception e) {
      promise.reject(e);
    }
  }
}