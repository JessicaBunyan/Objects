import * as React from "react";
import { SceneProps, Scene } from "./Scene";

export class ObjectSceneProps extends SceneProps{
    parentScene: Scene;
    exitSceneCallback: () => void;
    complete: boolean;
    active: boolean;
}

export class ObjectScene<ObjectSceneProps, S> extends Scene<ObjectSceneProps, S>{

}