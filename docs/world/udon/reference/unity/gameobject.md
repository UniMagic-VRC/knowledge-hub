---
title: 'GameObject'
sidebar_label: 'GameObject'
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[記述完了率 100%]

皆さん、オリエンテーションの時に扱いましたがちゃんと覚えていますか？

![slide](/img/world/udon/reference/unity/gameobject/slide.png)

魔術学舎United 2期 基盤系0限目 「What is UniMagic for your NEXT WORLD…」より抜粋

公式リファレンス  
[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.html)

## 注意事項

このページでいう「active」は、下の写真のチェックボックス（GameObjectの名前欄の左のやつ）にチェックが入っているか否かを意味しています。

![inspector_active](/img/world/udon/reference/unity/gameobject/inspector_active.png)

## GameObjectの取得

### Componentからの取得

任意のコンポーネントの「get gameObject」から取得することが可能です。

![get_gameobject](/img/world/udon/reference/unity/gameobject/get_gameobject.png)

## パラメータ

### bool activeInHierarchy「Hierarchy上でactiveか否か」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-activeInHierarchy.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-activeInHierarchy.html)

Getのみ可

「UnityEngine」→「GameObject」→「get activeInHierarchy」

Hierarchy上でアクティブか否かを取得します。

たとえ、自分自身はactiveであったとしても、親のGameObjectがactiveでない場合は、Hierarchy上でactiveにならないのでfalseが返ります。

![active_in_hierarchy](/img/world/udon/reference/unity/gameobject/active_in_hierarchy.png)

### bool activeSelf「activeか否か」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-activeSelf.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-activeSelf.html)

Getのみ可

「UnityEngine」→「GameObject」→「get activeSelf」

GameObjectがactiveか否かを取得します。

active状態の設定は、後述の「SetActive」を使用します。

![active_self](/img/world/udon/reference/unity/gameobject/active_self.png)

### bool isStatic「staticか否か」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-isStatic.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-isStatic.html)

Get/Set可

「UnityEngine」→「GameObject」→「get isStatic」もしくは「set isStatic」

GameObjectがstaticか否かを取得/設定します。

![is_static](/img/world/udon/reference/unity/gameobject/is_static.png)

### int layer「レイヤーを取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-layer.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-layer.html)

Get/Set可

「UnityEngine」→「GameObject」→「get layer」もしくは「set layer」

GameObjectが所属するレイヤーを取得/設定できます。

レイヤーに関して詳しくは、以下の公式リファレンスを参照してください。

[https://creators.vrchat.com/worlds/layers](https://creators.vrchat.com/worlds/layers)

（簡単に説明すると、ミラーに映る/衝突する/UIのビームが遮られるといった動作を決定するのがレイヤーです。）

![layer](/img/world/udon/reference/unity/gameobject/layer.png)

### Transform transform「GameObjectのTransformコンポーネントを取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-transform.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject-transform.html)

Getのみ可

「UnityEngine」→「GameObject」→「get transform」

GameObjectのTransformコンポーネントを取得します。

![transform](/img/world/udon/reference/unity/gameobject/transform.png)

## メソッド(static)

### GaneObject Find(string name)「名前でGameObjectを検索する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.Find.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.Find.html)

名前でGameObjectを検索し、結果を返します。

検索対象は、activeなGameObjectのみです。

見つからない場合、nullが返るので注意してください。

“/”の文字を用いることで、階層を表すことができます。

Transform.Find(string n)も参照してください。

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

![find](/img/world/udon/reference/unity/gameobject/find.png)

## メソッド

### void SetActive(bool value)「active状態を設定する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.SetActive.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.SetActive.html)

「UnityEngine」→「GameObject」→「SetActive」

GameObjectのactive状態をvalueの値に設定します。

![set_active](/img/world/udon/reference/unity/gameobject/set_active.png)

### Component GetComponent(string type)「指定したコンポーネントを取得する」

### Component GetComponent(Type type)「指定したコンポーネントを取得する」

### T GetComponent(Type type)「指定したコンポーネントを取得する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponent.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponent.html)

「UnityEngine」→「GameObject」→「GetComponent」

（Typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

指定したコンポーネントを取得します。

コンポーネントが見つからない場合、nullが返るので注意してください。

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_component_1](/img/world/udon/reference/unity/gameobject/get_component_1.png)

![get_component_2](/img/world/udon/reference/unity/gameobject/get_component_2.png)

![get_component_3](/img/world/udon/reference/unity/gameobject/get_component_3.png)

### T GetComponentInChildren(bool includeInactive)「下の階層のGameObjectからコンポーネントを取得」

### Component GetComponentInChildren(Type type, bool includeInactive)「下の階層のGameObjectからコンポーネントを取得」

### Component GetComponentInChildren(Type type)「下の階層のGameObjectからコンポーネントを取得」

### T GetComponentInChildren()「下の階層のGameObjectからコンポーネントを取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentInChildren.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentInChildren.html)

「UnityEngine」→「GameObject」→「GetComponentInChildren」

（typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

このGameObjectと、下の階層にあるGameObjectからコンポーネントを検索して取得します。

DFS（深さ優先探索）を行い、最初に見つかった一つのみを返します。

includeInactiveにチェックを入れることで、activeでないGameObjectも検索対象に入れることができます。

コンポーネントが見つからない場合、nullが返るので注意してください。

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_component_in_children_1](/img/world/udon/reference/unity/gameobject/get_component_in_children_1.png)

![get_component_in_children_2](/img/world/udon/reference/unity/gameobject/get_component_in_children_2.png)

![get_component_in_children_3](/img/world/udon/reference/unity/gameobject/get_component_in_children_3.png)

![get_component_in_children_4](/img/world/udon/reference/unity/gameobject/get_component_in_children_4.png)

### T GetComponentInParent(bool includeInactive)「上の階層のGameObjectからコンポーネントを取得」

### Component GetComponentInParent(Type type, bool includeInactive)「上の階層のGameObjectからコンポーネントを取得」

### Component GetComponentInParent(Type type)「上の階層のGameObjectからコンポーネントを取得」

### T GetComponentInParent()「上の階層のGameObjectからコンポーネントを取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentInParent.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentInParent.html)

「UnityEngine」→「GameObject」→「GetComponentInParent」

（typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

このGameObjectと、上の階層にあるGameObject（親のGameObject）からコンポーネントを検索して取得します。

上へ上へと再帰検索し、最初に見つかった一つのみを返します。

includeInactiveにチェックを入れることで、activeでないGameObjectも検索対象に入れることができます。

コンポーネントが見つからない場合、nullが返るので注意してください。

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_component_in_parent_1](/img/world/udon/reference/unity/gameobject/get_component_in_parent_1.png)

![get_component_in_parent_2](/img/world/udon/reference/unity/gameobject/get_component_in_parent_2.png)

![get_component_in_parent_3](/img/world/udon/reference/unity/gameobject/get_component_in_parent_3.png)

![get_component_in_parent_4](/img/world/udon/reference/unity/gameobject/get_component_in_parent_4.png)

### Component[] GetComponents(Type type)「指定したコンポーネントを配列で全て取得」

### T[] GetComponents(Type type)「指定したコンポーネントを配列で全て取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponents.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponents.html)

「UnityEngine」→「GameObject」→「GetComponents」

（typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

指定したコンポーネントを配列で全て取得します。

コンポーネントが見つからない場合、nullが返るので注意してください。

尚、ドロップダウンの所が、(ListT)もしくは(Type, CollectionsGenericListComponent)となっている場合、使用できません。（Udonはリストを使えないため）

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_components_1](/img/world/udon/reference/unity/gameobject/get_components_1.png)

![get_components_2](/img/world/udon/reference/unity/gameobject/get_components_2.png)

### T[] GetComponentsInChildren(bool includeInactive)「下の階層のGameObjectからコンポーネントを配列で全て取得」

### Component[] GetComponentsInChildren(Type type, bool includeInactive)「下の階層のGameObjectからコンポーネントを配列で全て取得」

### Component[] GetComponentsInChildren(Type type)「下の階層のGameObjectからコンポーネントを配列で全て取得」

### T[] GetComponentsInChildren()「下の階層のGameObjectからコンポーネントを配列で全て取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentsInChildren.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentsInChildren.html)

「UnityEngine」→「GameObject」→「GetComponentsInChildren」

（typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

このGameObjectと、下の階層にあるGameObjectからコンポーネントを検索して配列で全て取得します。

コンポーネントが見つからない場合、nullが返るので注意してください。

尚、ドロップダウンの所が、(ListT)もしくは(Boolean, ListT)となっている場合、使用できません。（Udonはリストを使えないため）

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_components_1](/img/world/udon/reference/unity/gameobject/get_components_in_children_1.png)

![get_components_2](/img/world/udon/reference/unity/gameobject/get_components_in_children_2.png)

![get_components_3](/img/world/udon/reference/unity/gameobject/get_components_in_children_3.png)

![get_components_4](/img/world/udon/reference/unity/gameobject/get_components_in_children_4.png)

### T[] GetComponentsInParent(bool includeInactive)「上の階層のGameObjectからコンポーネントを配列で全て取得」

### Component[] GetComponentsInParent(Type type, bool includeInactive)「上の階層のGameObjectからコンポーネントを配列で全て取得」

### Component[] GetComponentsInParent(Type type)「上の階層のGameObjectからコンポーネントを配列で全て取得」

### T[] GetComponentsInParent()「上の階層のGameObjectからコンポーネントを配列で全て取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentsInParent.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/GameObject.GetComponentsInParent.html)

「UnityEngine」→「GameObject」→「GetComponentsInParent」

（typeに関しては「Type」内、もしくは「VRC」→「VRC.Type」内より選択）

このGameObjectと、上の階層にあるGameObject（親のGameObject）からコンポーネントを検索して配列で全て取得します。

includeInactiveにチェックを入れることで、activeでないGameObjectも検索対象に入れることができます。

コンポーネントが見つからない場合、nullが返るので注意してください。

尚、ドロップダウンの所が、(Boolean, ListT)となっている場合、使用できません。（Udonはリストを使えないため）

注：重い処理となるため、結果を変数にキャッシュすることを推奨します。

VRCPickupコンポーネントを取得する処理を例として示しています。

![get_components_in_parent_1](/img/world/udon/reference/unity/gameobject/get_components_in_parent_1.png)

![get_components_in_parent_2](/img/world/udon/reference/unity/gameobject/get_components_in_parent_2.png)

![get_components_in_parent_3](/img/world/udon/reference/unity/gameobject/get_components_in_parent_3.png)

![get_components_in_parent_4](/img/world/udon/reference/unity/gameobject/get_components_in_parent_4.png)
