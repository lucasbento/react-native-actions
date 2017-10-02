
#import "RNActions.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

@interface RNActions()

@end

@implementation RNActions

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(RNActions)

RCT_EXPORT_METHOD(reload)
{
    [_bridge reload];
    return;
}

- (NSString *)getUrl {
    NSURL * url = [[RCTBundleURLProvider sharedSettings] packagerServerURL];
    NSString * parsedUrl = [NSString stringWithFormat:@"%@", [[NSURL alloc] initWithScheme:[url scheme]
                                              host:[url host]
                                              path:[url path]]];

    return [parsedUrl substringToIndex:[parsedUrl length] - 1];
}

RCT_REMAP_METHOD(getHostUrl,
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    resolve([self getUrl]);
}

@end
