---
title: 'Transform「一点の位置・回転・大きさ」'
sidebar_label: 'Transform'
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[記述完了率 プロパティ：50%、メソッド：一応100%]

一点の位置・回転・大きさを表すクラスです。

:::note オイラー角とクオータニオンについて

[https://docs.unity3d.com/ja/2022.3/Manual/QuaternionAndEulerRotationsInUnity.html](https://docs.unity3d.com/ja/2022.3/Manual/QuaternionAndEulerRotationsInUnity.html)

我々がよくエディタ上で見る回転の情報は、オイラー角（XYZ）で表されています。
しかし、オイラー角で回転を表す場合、ジンバルロックという問題が発生することがあります。

ジンバルロック：条件を満たすと、回転の自由度が一つ落ちてしまう現象。
Cupsuleを置き、RotationのXを90にして、YとZの値を変化させてみると分かりやすい。（YとZ、どちらを変えても同じ軸で回ってしまう）

そのため、Unityの内部ではクォータニオンという形式で回転を扱っています。  
[https://docs.unity3d.com/ja/2022.3/Manual/class-Quaternion.html](https://docs.unity3d.com/ja/2022.3/Manual/class-Quaternion.html)  
オイラー角で角度を扱う場合は、少しでも回転すると全く異なるオイラー角になる可能性があること、ジンバルロックという現象があることに留意しましょう。（クォータニオンで角度を扱うのがベターです。）

:::

公式リファレンス  
[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.html)

## プロパティ

### Vector3 localPosition「親からみた相対的な位置を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localPosition.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localPosition.html)

Get/Set可

「UnityEngine」→「Transform」→「get localPosition」もしくは「set localPosition」

親からみた相対的な位置を取得/設定します。

![local_position](/img/world/udon/reference/unity/transform/local_position.png)

### Vector3 localEulerAngles「親から見た相対的な回転（オイラー角）を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localEulerAngles.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localEulerAngles.html)

Get/Set可

「UnityEngine」→「Transform」→「get localEulerAngles」もしくは「set localEulerAngles」

親から見た相対的な回転を、オイラー角形式で取得/設定します。

このページの上部、「注意点：オイラー角とクオータニオンについて」も参照してください。

![local_euler_angles](/img/world/udon/reference/unity/transform/local_euler_angles.png)

### Quaternion localRotation「親から見た相対的な回転（クオータニオン）を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localRotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localRotation.html)

Get/Set可

「UnityEngine」→「Transform」→「get localRotation」もしくは「set localRotation」

親から見た相対的な回転を、クオータニオン形式で取得/設定します。

このページの上部、「注意点：オイラー角とクオータニオンについて」も参照してください。

![local_quaternion](/img/world/udon/reference/unity/transform/local_quaternion.png)

### Vector3 localScale「親から見た相対的なスケールを取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localScale.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-localScale.html)

Get/Set可

「UnityEngine」→「Transform」→「get localScale」もしくは「set localScale」

親から見た相対的なスケールを取得/設定します。

![local_scale](/img/world/udon/reference/unity/transform/local_scale.png)

### Vector3 position「ワールド空間での座標を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-position.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-position.html)

Get/Set可

「UnityEngine」→「Transform」→「get position」もしくは「set position」

ワールド空間での座標を取得/設定します。

![position](/img/world/udon/reference/unity/transform/position.png)

### Vector3 eulerAngles「ワールド空間での回転（オイラー角）を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-eulerAngles.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-eulerAngles.html)

Get/Set可

「UnityEngine」→「Transform」→「get eulerAngles」もしくは「set eulerAngles」

ワールド空間での回転（オイラー角）を取得/設定します。

このページの上部、「注意点：オイラー角とクオータニオンについて」も参照してください。

![euler_angles](/img/world/udon/reference/unity/transform/euler_angles.png)

### Quaternion rotation「ワールド空間での回転（クオータニオン）を取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-rotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-rotation.html)

Get/Set可

「UnityEngine」→「Transform」→「get rotation」もしくは「set rotation」

ワールド空間での回転（オイラー角）を取得/設定します。

このページの上部、「注意点：オイラー角とクオータニオンについて」も参照してください。

![rotation](/img/world/udon/reference/unity/transform/rotation.png)

### Transform parent「親のTransformを取得/設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-parent.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform-parent.html)

Get/Set可

「UnityEngine」→「Transform」→「get parent」もしくは「set parent」

親のTransformを取得/設定します。

親を変更した場合、ワールド座標は同じになるように親からの相対的な距離などが変更されます。

ローカル座標を維持したまま、親のTransformを変更したい場合は、SetParentメソッドを使用してください。

![parent](/img/world/udon/reference/unity/transform/parent.png)

### int childCount「子オブジェクトの数を取得」

Getのみ可

「UnityEngine」→「Transform」→「get childCount」

Activeでないものも含め、子オブジェクトの数を取得します。

![child_count](/img/world/udon/reference/unity/transform/child_count.png)

## メソッド

### Transform Find(string n)「特定の名前の子Transformを取得する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Find.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Find.html)

「UnityEngine」→「Transform」→「Find」

特定の名前の子Transformを取得します。

見つからなかった場合は、nullが返るため、注意してください。

“/”の文字を用いることで、階層を表すことができます。

このメソッドは、指定した階層のみを検索します。

例えば、「Parent」という名前のTransformのFindメソッドで「Children1」と検索した場合、Parentの子であるオブジェクトは検索対象になりますが、孫以深のオブジェクトは検索対象になりません。

孫以深のオブジェクトを検索したい場合は、“/”の文字を用い、階層を指定する必要があります。（例：”Children1/Grandchild1”）

![find](/img/world/udon/reference/unity/transform/find.png)

### Transform GetChild(int index)「n番目の子Transformを取得する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetChild.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetChild.html)

「UnityEngine」→「Transform」→「GetChild」

指定したN番目の子Transformを取得します。

存在しない番号を指定してしまうとエラーが発生するので注意しましょう。

![get_child](/img/world/udon/reference/unity/transform/get_child.png)

### void LookAt(Transform target)「対象の方向に向かせる」

### void LookAt(Transform target, Vector3 worldUp)「対象の方向に向かせる」

### void LookAt(Vector3 worldPosition)「対象の方向に向かせる」

### void LookAt(Vector3 worldPosition, Vector3 worldUp)「対象の方向に向かせる」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.LookAt.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.LookAt.html)

「UnityEngine」→「Transform」→「LookAt」

target/worldUpで指定した方向に向かせます。

その後、worldUpで指定した向き（無指定ならワールドY軸）に上方ベクトルを向けるように回転させます。

![look_at_1](/img/world/udon/reference/unity/transform/look_at_1.png)

![look_at_2](/img/world/udon/reference/unity/transform/look_at_2.png)

![look_at_3](/img/world/udon/reference/unity/transform/look_at_3.png)

![look_at_4](/img/world/udon/reference/unity/transform/look_at_4.png)

### void RotateAround(Vector3 point, Vector3, axis, float angle)「特定の軸を中心に、指定した角度だけ回転させる」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.RotateAround.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.RotateAround.html)

「UnityEngine」→「Transform」→「RotateAround」

pointを中心としたaxisの軸で、angle度回転させます。

![rotate_around](/img/world/udon/reference/unity/transform/rotate_around.png)

### void SetParent(Transform p)「親となるTransformを変更する」

### void SetParent(Transform parent, bool worldPositionStays)「親となるTransformを変更する」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetParent.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetParent.html)

「UnityEngine」→「Transform」→「SetParent」

親となるTransformを変更します。

worldPositionStays（デフォルト値：true）がtrueの場合は、ワールド座標が維持され、falseの場合はローカル座標（親との相対的な距離）が維持されます。

![set_parent_1](/img/world/udon/reference/unity/transform/set_parent_1.png)

![set_parent_2](/img/world/udon/reference/unity/transform/set_parent_2.png)

## 説明を省略したメソッド

### void Rotate(Vector3 eulers, Space relativeTo)「指定した角度で回転させる」

### void Rotate(Vector3 eulers)「指定した角度で回転させる」

### void Rotate(float xAngle, float yAngle, float zAngle, relativeTo)「指定した角度で回転させる」

### void Rotate(float xAngle, float yAngle, float zAngle)「指定した角度で回転させる」

### void Rotate(Vector3 axis, float angle, relativeTo)「指定した角度で回転させる」

### void Rotate(Vector3 axis, float angle)「指定した角度で回転させる」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Rotate.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Rotate.html)

割と重要な関数ですが、taka7nが力尽きたので説明は省略されました。そのうち書きたい。

### void Translate(Vector3 translation, Space relativeTo)「指定した方向・距離に移動させる」

### void Translate(Vector3 translation)「指定した方向・距離に移動させる」

### void Translate(float x, float y, float z, relativeTo)「指定した方向・距離に移動させる」

### void Translate(float x, float y, float z)「指定した方向・距離に移動させる」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Translate.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.Translate.html)

割と重要な関数ですが、taka7nが力尽きたので説明は省略されました。そのうち書きたい。

### void DetachChildren()「全ての子オブジェクトを切り離す」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.DetachChildren.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.DetachChildren.html)

### void GetLocalPositionAndRotation(Vector3 localPosition, Quaternion localRotation)「親から見た相対的な座標・回転を取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetLocalPositionAndRotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetLocalPositionAndRotation.html)

### void GetPositionAndRotation(Vector3 localPosition, Quaternion localRotation)「ワールド空間での座標・回転を取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetPositionAndRotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetPositionAndRotation.html)

### void SetLocalPositionAndRotation(Vector3 localPosition, Quaternion localRotation)「親から見た相対的な座標・回転を設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetLocalPositionAndRotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetLocalPositionAndRotation.html)

### void SetPositionAndRotation(Vector3 localPosition, Quaternion localRotation)「ワールド空間での座標・回転を設定」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetPositionAndRotation.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetPositionAndRotation.html)

### Vector3 InverseTransformDirection(Vector3 direction)「方向をワールド空間からローカル空間へ変換」

### Vector3 InverseTransformDirection(float x, float y, float z)「方向をワールド空間からローカル空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformDirection.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformDirection.html)

### Vector3 InverseTransformPoint(Vector3 position)「位置をワールド空間からローカル空間へ変換」

### Vector3 InverseTransformPoint(float x, float y, float z)「位置をワールド空間からローカル空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformPoint.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformPoint.html)

### Vector3 InverseTransformVector(Vector3 vector)「ベクトルをワールド空間からローカル空間へ変換」

### Vector3 InverseTransformVector(float x, float y, float z)「ベクトルをワールド空間からローカル空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformVector.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.InverseTransformVector.html)

### Vector3 TransformDirection(Vector3 direction)「方向をローカル空間からワールド空間へ変換」

### Vector3 TransformDirection(float x, float y, float z)「方向をローカル空間からワールド空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformDirection.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformDirection.html)

### Vector3 TransformPoint(Vector3 direction)「位置をローカル空間からワールド空間へ変換」

### Vector3 TransformPoint(float x, float y, float z)「位置をローカル空間からワールド空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformPoint.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformPoint.html)

### Vector3 TransformVector(Vector3 direction)「ベクトルをローカル空間からワールド空間へ変換」

### Vector3 TransformVector(float x, float y, float z)「ベクトルをローカル空間からワールド空間へ変換」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformVector.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.TransformVector.html)

### bool IsChildOf(Transform parent)「自分自身が指定したTransformと同じ/子供/孫以深か否か」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.IsChildOf.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.IsChildOf.html)

### void SetAsFirstSibling()「同じ階層の中で、一番最初の順番になるように移動」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetAsFirstSibling.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetAsFirstSibling.html)

UIの描画順とかの決定に使えそうです。

### void SetAsLastSibling()「同じ階層の中で、一番最後の順番になるように移動」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetAsLastSibling.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetAsLastSibling.html)

UIの描画順とかの決定に使えそうです。

### int GetSiblingIndex()「同じ階層の中で、何番目のTransfomかを取得」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetSiblingIndex.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.GetSiblingIndex.html)

UIの描画順とかの決定に使えそうです。

### void SetSiblingIndex(int index)「同じ階層の中で、N番目の順番になるように移動」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetSiblingIndex.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/Transform.SetSiblingIndex.html)

UIの描画順とかの決定に使えそうです。
