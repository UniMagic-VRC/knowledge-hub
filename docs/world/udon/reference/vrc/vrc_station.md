---
title: 'VRCStation「Sit判定」'
sidebar_label: 'VRCStation'
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[記述完了率 100%]

VRCStationは、いわゆるSit判定を追加するコンポーネントです。

VRC公式リファレンス  
[https://creators.vrchat.com/worlds/components/vrc_station](https://creators.vrchat.com/worlds/components/vrc_station)

U#リファレンス  
[https://udonsharp.docs.vrchat.com/vrchat-api#vrcstation](https://udonsharp.docs.vrchat.com/vrchat-api#vrcstation)

## プロパティ

### Mobility PlayerMobility「座った時にプレイヤーが動けるか」

Get/Set可

「VRC」→「Station」→「get PlayerMobility」もしくは「set PlayerMobility」

座った時にプレイヤーが動けるかを取得/設定します。

#### Mobilityの値

- Mobile 座った状態で移動可能
- Immobilize 座った状態で移動不可
- ImmobilizeForVehicle 座った状態で移動不可（Station自体が動く場合はこれ）

![player_mobility](/img/world/udon/reference/vrc/vrc_station/player_mobility.png)

### bool canUseStationFromStation「座っている状態で別のStationに直接移動できるか」

Get/Set可

「VRC」→「Station」→「get canUseStationFromStation」もしくは「set canUseStationFromStation」

座っている状態で別のStationに直接移動できるかを取得/設定します。

![can_use_from_station](/img/world/udon/reference/vrc/vrc_station/can_use_from_station.png)

### RuntimeAnimatorController animatorController「座る時のアニメーションを設定」

Get/Set可

「VRC」→「Station」→「get animatorController」もしくは「set animatorController」

座る時のアニメーションを取得/設定します。

注：基本的にはHMDやコントローラーなどの動作が優先されます。
完全にアニメーションで上書きするためには、FinalIKを使う、もしくはAvatarSDKをWorldのプロジェクトに入れるといった黒魔術が必要になります。

![animator_controller](/img/world/udon/reference/vrc/vrc_station/animator_controller.png)

### bool disableStationExit「プレイヤーがSit判定から出れないようにするかどうか」

Get/Set可

「VRC」→「Station」→「get disableStationExit」もしくは「set disableStationExit」

プレイヤーがSit判定から出れないようにするかどうかを取得/設定します。

trueにした場合は、プレイヤーが通常の操作でSit判定から出れないようになるので、別途Sit判定から出るための処理を書く必要があります。

![disable_station_exit](/img/world/udon/reference/vrc/vrc_station/disable_station_exit.png)

### bool seated「座る用の椅子かどうか」

Getのみ可

「VRC」→「Station」→「get seated」

座る用の椅子かどうかを取得します。

![seated](/img/world/udon/reference/vrc/vrc_station/seated.png)

### Transform stationEnterPlayerLocation「着席する時の位置」

Get/Set可

「VRC」→「Station」→「get stationEnterPlayerLocation」もしくは「set stationEnterPlayerLocation」

着席する時の位置を取得/設定します。

![station_enter_player_location](/img/world/udon/reference/vrc/vrc_station/station_enter_player_location.png)

### Transform stationExitPlayerLocation「離席する時の位置」

Get/Set可

「VRC」→「Station」→「get stationExitPlayerLocation」もしくは「set stationExitPlayerLocation」

離席した時に、どこに飛ばされるかを取得/設定します。

![station_exit_player_location](/img/world/udon/reference/vrc/vrc_station/station_exit_player_location.png)

## メソッド

### void UseStation(VRCPlayerApi player)「プレイヤーを着席させる」

「VRC」→「Station」→「UseStation」

Stationに指定したプレイヤーを着席させます。

![use_station](/img/world/udon/reference/vrc/vrc_station/use_station.png)

### void ExitStation(VRCPlayerApi player)「プレイヤーを離席させる」

「VRC」→「Station」→「ExitStation」

Stationから指定したプレイヤーを離席させます。

![exit_station](/img/world/udon/reference/vrc/vrc_station/exit_station.png)
