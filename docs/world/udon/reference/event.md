---
title: 'Event一覧'
sidebar_label: 'Event一覧'
sidebar_position: 1
---

[記述完了率：VRCのイベントは一応100%、Unityのイベントは10%くらい]

イベントは全ての処理の起点となる要素。  
もっと詳しく知りたい場合は、以下のページを参照するとよい。

（U#ページのイベント一覧・1ページにまとまっているので分かりやすい）  
[https://udonsharp.docs.vrchat.com/events](https://udonsharp.docs.vrchat.com/events)

（公式ページのイベント一覧・基本的なイベントは網羅しているが、一部イベントは別ページに記載されている）  
[https://creators.vrchat.com/worlds/udon/graph/event-nodes](https://creators.vrchat.com/worlds/udon/graph/event-nodes)

（イベントの実行順について）  
[https://creators.vrchat.com/worlds/udon/event-execution-order](https://creators.vrchat.com/worlds/udon/event-execution-order)

ここに書かれていない、Unity側のイベントも存在しています。  
一覧は以下から参照できます。  

[https://udonsharp.docs.vrchat.com/events#unity-events](https://udonsharp.docs.vrchat.com/events#unity-events)

:::warning 注意点

- 通常のUnityの挙動と違い、FixedUpdateはユーザーのHMD等のリフレッシュレートに依存します。
- OnBecameVisible及びOnBecameInvisibleは使用できません。  
ただし、カスタムイベント「_onBecameVisible」及び「_onBecameInvisible」を作成することで使用可能です。  
[https://feedback.vrchat.com/udon/p/onbecameinvisible-onbecamevisible-broken](https://feedback.vrchat.com/udon/p/onbecameinvisible-onbecamevisible-broken)

:::

## よく使われるイベント

### Start()「ワールドに入った時」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.Start.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.Start.html)

ワールドの読み込みが完了し、最初のフレーム更新前に**一度のみ**呼び出されるイベントです。

とりあえずワールドに入った瞬間に何か処理をしたいならこれ。

### Update()「毎フレーム」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.Update.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.Update.html)

**毎フレーム**呼び出されるイベントです。

便利ですが、毎フレーム呼び出されるので負荷に注意。

例えば、60FPSだと1フレーム0.017秒しかありません。（Udonが使える時間はもっと少ない）

その時間内に終えられない重い処理をUpdate()内で実行すると、フレームレートがガクッと落ちてしまいます。

### Interact()「インタラクト（Use）した時」

注：Udonを付けたGameObjectに、Colliderを追加する必要があります。

インタラクト（Use）した時に呼び出されるイベントです。

このイベントを追加すると、Udon Behaviourの設定項目に「Interaction Text」（インタラクトする時に出てくる文字）、「Proximity」（インタラクトするのに必要な距離）などの設定が追加されます。

Proximityについて：[https://creators.vrchat.com/worlds/components/vrc_pickup/#proximity-rules](https://creators.vrchat.com/worlds/components/vrc_pickup/#proximity-rules)

### OnPlayerJoined(VRCPlayerApi player)「誰かプレイヤーがJoinした時」

引数として、JoinしたプレイヤーのVRCPlayerApiを取得できます。

後からJoinしてきた場合、既にワールドにいる人の分と自分自身の分が呼び出されます。

（たまにJoinした瞬間にJoin通知がたくさん出てくるワールドがありますが、この仕様が原因ですね。）

### OnPlayerLeft(VRCPlayerApi player)「誰かプレイヤーがLeftした時」

引数として、インスタンスから退出したプレイヤーのVRCPlayerApiを取得できます。

このイベント内では、まだ退出したプレイヤーのVRCPlayerApiは有効です。

なお、このイベント内でVRCPlayerApi.GetPlayerCount()を実行すると、退出したプレイヤーまでカウントされます。なんで？

### OnPlayerRespawn(VRCPlayerApi player)「自分がリスポーンした時」

引数として、リスポーンしたプレイヤーのVRCPlayerApiを取得できます。

（ただし、検証してみた結果、このイベントは自分がリスポーンした時しか呼ばれませんでした。つまり引数のVRCPlayerApiは確定で自分ということになります。）

## Collider関連

「プレイヤーが」の場合は「OnPlayer～」、「プレイヤー以外の物体が」の場合は「On～」になります。

Collider関連の判定は、Udonが付けられているGameObjectにあるColliderに対して判定が行われます。

そのため、これらのイベントを使用したい場合は、Udonが付けられているGameObjectにColliderを追加しておく必要があります。

### OnPlayerTriggerEnter(VRCPlayerApi player)「誰かが特定のエリアに入った時（Is Triggerなコライダーに侵入した時）」

ローカル/リモート問わず、誰かがIs Triggerなコライダーに侵入した時に呼び出されます。

ただし、入った判定は各クライアントで行われるため、コライダーギリギリの場所に人が立っている場合、ローカル/リモートでイベントが発生したり発生しなかったりする可能性があります。

（もちろん、同期の関係でタイミングもズレます。）

### OnPlayerTriggerStay(VRCPlayerApi player)「誰かが特定のエリアに入っている間（Is Triggerなコライダーに侵入している間）」

ローカル/リモート問わず、誰かがIs Triggerなコライダーに入っている間、毎フレーム呼び出されます。`Update()`と同様に負荷に注意しましょう。

### OnPlayerTriggerExit(VRCPlayerApi player)「誰かが特定のエリアから出た時（Is Triggerなコライダーから出た時）」

ローカル/リモート問わず、誰かがIs Triggerなコライダーから出た時に呼び出されます。

### OnPlayerCollisionEnter(VRCPlayerApi player)「誰かがコライダーと接触し始めた時」

OnPlayerCollision～系は、コライダーを含むGameObjectが静止している場合反応しません。

（厳密には検証できていませんが、）このイベントが発生するためには、コライダーを含むGameObjectにRigidBodyを追加した上で、コライダー側が動いている必要があります。

また、PickUpレイヤーの物はPlayerと接触しないため、注意が必要です。

### OnPlayerCollisionEnter(VRCPlayerApi player)「誰かがコライダーと接触している間」

OnPlayerCollisionEnterと同様の注意点があります。

### OnPlayerCollisionEnter(VRCPlayerApi player)「誰かがコライダーから離れた時」

OnPlayerCollisionEnterと同様の注意点があります。

### OnPlayerParticleCollision(VRCPlayerApi player)「パーティクルがプレイヤーに当たった時」

パーティクルのSendCollisionMessagesをOnにしておく必要があります。

### **OnTriggerEnter(Collider other)「コライダーがコライダーに侵入した時」**

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerEnter.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerEnter.html)

侵入した/されたコライダーのうち、少なくともどちらか一方がIs Triggerなコライダーである必要があります。

### OnTriggerStay(Collider other)「**コライダーがコライダーに侵入している間**」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerStay.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerStay.html)

侵入した/されたコライダーのうち、少なくともどちらか一方がIs Triggerなコライダーである必要があります。

### **OnTriggerExit(Collider other)「コライダーがコライダーから出た時」**

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerExit.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnTriggerExit.html)

侵入した/されたコライダーのうち、少なくともどちらか一方がIs Triggerなコライダーである必要があります。

### OnCollisionEnter(Collision other)「コライダーがコライダーと接触し始めた時」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionEnter.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionEnter.html)

両方のコライダーがIs Triggerでない必要があります。

また、コライダーのどちらかは動いている必要があり、動いている側のコライダーにはRigidBodyが必要です。

### OnCollisionStay(Collision other)「コライダーがコライダーと接触している間」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionStay.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionStay.html)

両方のコライダーがIs Triggerでない必要があります。

また、コライダーのどちらかは動いている必要があり、動いている側のコライダーにはRigidBodyが必要です。

### OnCollisionExit(Collision other)「コライダーがコライダーから離れた時」

[https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionExit.html](https://docs.unity3d.com/ja/2022.3/ScriptReference/MonoBehaviour.OnCollisionExit.html)

両方のコライダーがIs Triggerでない必要があります。

また、コライダーのどちらかは動いている必要があり、動いている側のコライダーにはRigidBodyが必要です。

## Station（Sit判定）関連

### OnStationEntered(VRCPlayerApi player)「Sit判定に座った時」

Udon Behaviourを付けたGameObjectに、[VRC_Station](https://creators.vrchat.com/worlds/components/vrc_station/)コンポーネントが必要です。

### OnStationExited(VRCPlayerApi player)「Sit判定から出た時」

Udon Behaviourを付けたGameObjectに、[VRC_Station](https://creators.vrchat.com/worlds/components/vrc_station/)コンポーネントが必要です。

## Pickup関連

### OnPickup()「自分がものを拾った時」

Udon Behaviourを付けたGameObjectに、[VRC_Pickup](https://creators.vrchat.com/worlds/components/vrc_pickup/)コンポーネントが必要です。

### OnPickupUseDown()「自分がものを拾った状態でUseした時」

Udon Behaviourを付けたGameObjectに、[VRC_Pickup](https://creators.vrchat.com/worlds/components/vrc_pickup/)コンポーネントが必要です。

### OnPickupUseUp()「自分がものを拾った状態でUseを止めた時」

Udon Behaviourを付けたGameObjectに、[VRC_Pickup](https://creators.vrchat.com/worlds/components/vrc_pickup/)コンポーネントが必要です。

### OnDrop()「自分がものを落とした時」

Udon Behaviourを付けたGameObjectに、[VRC_Pickup](https://creators.vrchat.com/worlds/components/vrc_pickup/)コンポーネントが必要です。

## Update関連

（既に記述している`Update()`は省略します）

### PostLateUpdate()「IKの計算が終わった後、毎フレーム」

プレイヤーの姿勢を取得しようとする時は、このイベントで取得すると一番正確な値が得られます。

## Network関連

### OnDeserialization()「同期のデータが到着した時」

このイベントは、同期のデータを送る側の人（Owner）は実行されないので注意が必要です。

同期変数が書き換わった時に～したい、とい場合は「On Variable Changed」も参考にしてください。

以下は、同期に関する高度な処理のイベントなので説明を省略します。

詳しく知りたい場合は、以下を参照してください。

[https://creators.vrchat.com/worlds/udon/networking/#requesting-ownership-advanced](https://creators.vrchat.com/worlds/udon/networking/#requesting-ownership-advanced)

### OnPreSerialization()

### OnPostSerialization(VRC.Udon.Common.SerializationResult result)

### OnOwnershipRequest(VRCPlayerApi requester, VRCPlayerApi newOwner)

### OnOwnershipTransferred(VRCPlayerApi player)

## Image Loading関連

詳しくは、以下のページを参照してください。

[https://creators.vrchat.com/worlds/udon/image-loading/](https://creators.vrchat.com/worlds/udon/image-loading/)

### OnImageLoadSuccess(IVRCImageDownload result)「Image Loadingが成功した時」

### OnImageLoadError(IVRCImageDownload result)「Image Loadingが失敗した時」

## String Loading関連

詳しくは、以下のページを参照してください。

[https://creators.vrchat.com/worlds/udon/string-loading/](https://creators.vrchat.com/worlds/udon/string-loading/)

### OnStringLoadSuccess(IVRCStringDownload result)「String Loadingが成功した時」

### OnStringLoadError(IVRCStringDownload result)「String Loadingが失敗した時」

## Input関連

詳しくは、以下のページを参照してください。

[https://creators.vrchat.com/worlds/udon/input-events/](https://creators.vrchat.com/worlds/udon/input-events/)

### InputJump(bool value, VRC.Udon.Common.UdonInputEventArgs args)「ジャンプボタンを押した/離した時」

### InputUse(bool value, VRC.Udon.Common.UdonInputEventArgs args)「Useボタンを押した/離した時」

### InputGrab(bool value, VRC.Udon.Common.UdonInputEventArgs args)「Grabボタンを押した/離した時」

### InputDrop(bool value, VRC.Udon.Common.UdonInputEventArgs args)「Releaseボタンを押した/離した時」

### InputMoveHorizontal(float value, VRC.Udon.Common.UdonInputEventArgs args)「左右に動いた時」

### InputMoveVertical(float value, VRC.Udon.Common.UdonInputEventArgs args)「前後に動いた時」

### InputLookHorizontal(float value, VRC.Udon.Common.UdonInputEventArgs args)「左右の視点を入力した時」

### InputLookVertical(float value, VRC.Udon.Common.UdonInputEventArgs args)「上下の視点を入力した時」

## VideoPlayer関連

### OnVideoReady()「ビデオプレイヤーがURLを読み込んだ時」

### OnVideoStart()「ビデオプレイヤーが停止状態から再生を開始する時」

### OnVideoPlay()「ビデオプレイヤーが再生を開始する時」

### OnVideoLoop()「ループが有効なビデオプレイヤーが動画の最後にたどり着いた時」

### OnVideoEnd()「ビデオプレイヤーが再生を終了した時」

### OnVideoError(VideoError videoError)「ビデオプレイヤーにエラーが発生した時」

## MIDI関連

詳しくは、以下のページを参照してください。

[https://creators.vrchat.com/worlds/udon/midi/](https://creators.vrchat.com/worlds/udon/midi/)

### MidiNoteOn(int channel, int number, int velocity)

### MidiNoteOff(int channel, int number, int velocity)

### MidiControlChange(int channel, int number, int value)
