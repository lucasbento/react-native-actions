
#import "RNActions.h"
#import <React/RCTBridge.h>

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

@end
