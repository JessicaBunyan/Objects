import * as React from "react";
import { SceneProps, Scene } from "./Scene";

export class ObjectSceneProps extends SceneProps{
    parent: Scene;
    complete: boolean;
    active: boolean;
}

export class ObjectScene<ObjectSceneProps, S> extends Scene<ObjectSceneProps, S>{

}