// Copyright 2015-2020 SWIM.AI inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Value} from "@swim/structure";
import {Host} from "./host/Host";
import {WarpRef} from "./WarpRef";

export type WarpDidConnect = (host: Host, warp: WarpRef) => void;
export type WarpDidAuthenticate = (body: Value, host: Host, warp: WarpRef) => void;
export type WarpDidDeauthenticate = (body: Value, host: Host, warp: WarpRef) => void;
export type WarpDidDisconnect = (host: Host, warp: WarpRef) => void;
export type WarpDidFail = (error: unknown, host: Host, warp: WarpRef) => void;

export interface WarpObserver {
  didConnect?: WarpDidConnect;
  didAuthenticate?: WarpDidAuthenticate;
  didDeauthenticate?: WarpDidDeauthenticate;
  didDisconnect?: WarpDidDisconnect;
  didFail?: WarpDidFail;
}

/**
 * @deprecated
 */
export type SwimObserver = WarpObserver;
