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

import {Item} from "../Item";
import {Text} from "../Text";
import {Form} from "../Form";

/** @hidden */
export class StringForm extends Form<string> {
  /** @hidden */
  readonly _unit: string | undefined;

  constructor(unit?: string) {
    super();
    this._unit = unit;
  }

  unit(): string | undefined;
  unit(unit: string | undefined): Form<string>;
  unit(unit?: string | undefined): string | undefined | Form<string> {
    if (arguments.length === 0) {
      return this._unit;
    } else {
      return new StringForm(unit);
    }
  }

  mold(object: string, item?: Item): Item {
    if (item === void 0) {
      return Text.from(object);
    } else {
      return item.concat(Text.from(object));
    }
  }

  cast(item: Item, object?: string): string | undefined {
    const value = item.target();
    try {
      return value.stringValue();
    } catch (error) {
      return void 0;
    }
  }
}
Form.StringForm = StringForm;
