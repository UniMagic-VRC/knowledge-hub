---
title: 'VRCPlayerApi「プレイヤーの情報を取得したり操作したり」'
sidebar_label: 'VRCPlayerApi'
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[記述完了率 一応100%]

VRCPlayerAPIは、プレイヤー周りの処理を行うクラス。

VRC公式リファレンス  
[https://creators.vrchat.com/worlds/udon/players/](https://creators.vrchat.com/worlds/udon/players/)

U#リファレンス  
[https://udonsharp.docs.vrchat.com/vrchat-api#vrcplayerapi](https://udonsharp.docs.vrchat.com/vrchat-api#vrcplayerapi)

## VRCPlayerApi特有の注意事項

VRCPlayerApiが指すプレイヤーがインスタンスから退出した後は、そのオブジェクトは無効になります。

変数に保存して使いまわす場合は、Is Valid関数（「Special」→「Is Valid」）で有効なVRCPlayerApiかチェックすることを推奨します。

## VRCPlayerApiの取得

### VRCPlayerApi NetWorking.LocalPlayer「自分のVRCPlayerApiを取得」

自分のVRCPlayerApiを取得します。

例は、`Start`イベント時に、`_localPlayer`変数に自分のVRCPlayerApiを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1V3U7bMBh9lcrXceSfz7FTiYsBm4SYGFq33kxVZDsOyjAJShxYVXgyLvZIe4W5FNYBk9qxIU2TfZHYX6xzzudz8u3m6wJdaD84NP60QNXg/ZE+iy9oqrtaG++K6fu9yf7hru5dfDr2eu66V+c1StBQl7HOlqoEIw3OqBAYCGPYCALYlDarVA66UjIWn7d9Heq2QeMF+oLGWAFJqSCEAVAgGRMJmsdlUDyFPM+zHBQDRvPrBDVt6T4e7PcRIYonrecsQZVvL+/2ZqvK6ZJMf8tmaOowf2c+OxumK4oLVDd90I11B/toTOLhfejq5uRuG6Hr5DmfTeZ9cGfp5HYxGZ31tu18bZLR1HV9JL0DKVmOZLQ3+DB0bqdxQ+i0T0bHg/G1PXTzD+2pa3aMlFpYkdGcgyMqvyp8a7Vfyf5n6Hbb1jvd/F14b7Tv3f+J6yW62bRNRDVb4vrJaq8vXBOKSdBd+GErpTQrwWVYcUcxVJRjJViFLXBuGMtyyuEXtqJEpEQKQhkjknB67ysBqYy+UiCBMkpyeOirh05CimfEZFJjJ0uDgRuDjRQWS14yw7Qg1jL02G+PWa1z48iFy7Y7jWqmRXHiQvF2faeLTfnCDVEaDMXS6SiEAY6NM4AJlKI0KneWZdsL8Vs6bGI4iVTuY3LduG20e4J3Q98EMMYzzhR9mofbCHRFXiYvX9AqW/1XnmfwfzevZnF8Bw==
```

「VRC」→「NetWorking」→「get LocalPlayer」

![get_local_player](/img/world/udon/reference/vrc/vrc_player_api/get_local_player.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private VRCPlayerApi _localPlayer;

    void Start()
    {
        _localPlayer = Networking.LocalPlayer;
    }
}
```

</TabItem>
</Tabs>

### VRCPlayerApi[] GetPlayers(VRCPlayerApi[] player)「全プレイヤーのVRCPlayerApiを取得」

引数で指定した配列に、全プレイヤーのVRCPlayerApiを格納します。

配列の長さが、プレイヤー数よりも小さい場合、エラーになるため注意してください。

例は、`Start`イベント時に、現在のプレイヤー数の長さの配列を作成し、`_players`変数に全プレイヤーのVRCPlayerApiを格納する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1WW2/TMBj9K5Wf4+jz3a60h10ATZNgotAXVEVO7KBAlky5DKqyX8YDP4m/gNvu3mqEsUqIJA9J7FjfOT7nfPn5/ccCXdiy92j8YYHyvixf27PwgKa2KWxa+mT69nBydHJgWx/uTks7983+ebHfNHaOItQXLkymljMKTmEticOcE4mtoIBTSZVkWeZ0BmHyed0WXVFXaLxAX9EYE0pVTAGIEYxQEaF5eMkVjSEckgATRIQVLiNU1c6/Pz5qQ5UoLHR7zSKUl/WXq7HZeuZ0CahdIeqropu/ST/5rJuuYS5QUbWdrTJ/fITGEBZvu6aoPl4NI3QZPeWzybzt/Fk8Wb2MRmdtVjdlkUajqW/agHmPx7A8o9FhX3Z94/cq33eNLaPRaZ+WRXbi5+/qz77aS5WyIhOSGMY9aPMtOV+x3v5dZQd1XXpbPW9pL23Z+v+zrl3sZFVXoarZsq47Vntx4asumXS26W4cpbWljnuJNfME85wwrAXNccYZSymVhjC+xVHU6FgG8xglg3OuHWVWhmIgiBJKE6rvO+q+h5AC6YEIwFRxjbnnAlvHLCZZcLkTIjWWoIdOe4hp4rvkOkJuQA1aeQPUNSYmJSVgmFLDYC3zIfU25E/IJGedwVxqwMbzDLuwJYQz0KlJv8FugmSHOhqUt09T/79r5ocS296Y4iR55bv1Y5s81r0eHbzR7BAFbWpWixiMMYQLAUtprp34W8WC8OC18NjkKrjea4ctN4A5pS7PwPjM6CDXXTS9YeyuuAkUZ13dJMl604+rjtFhZA7Bt+0/ASCWAkALzg0lWg2kUykjpQUWUkZbzG2ucepygnMBJhMObAjJndB55YYVM8/rBXiKDw7rPjSYu9t1G8kDKNrWZzTEZDOT/6zTbPaQ2eUv
```

（左）「VRC」→「PlayerApi」→「GetPlayerCount」  
（中）「VRC」→「PlayerApi[]」→「constructor」  
（右）「VRC」→「PlayerApi」→「GetPlayers」

![get_players](/img/world/udon/reference/vrc/vrc_player_api/get_players.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private VRCPlayerApi[] _players;

    void Start()
    {
        _players = new VRCPlayerApi[VRCPlayerApi.GetPlayerCount()];
        VRCPlayerApi.GetPlayers(_players);
    }
}
```

</TabItem>
</Tabs>

### VRCPlayerApi GetPlayerById(int playerId)「PlayerIDを元にVRCPlayerApiを取得」

PlayerIDを元に、VRCPlayerApiを取得します。

注：ここで言うIDは、最初に入った人を1として、Joinするたびに値を1増やして付与される値のこと。

#### PlayerIDについて
  
  > **PlayerIDの決定規則**  
  > プレイヤーIDは最初に入った人を1として、どんどん数字が増えていく
  >  
  >  
  > > 1 : user1
  > 2 : user2
  > 3 : user3
  > >  
  >  
  > ここでuser2が抜けて、そのあとuser4が入ってきた場合は2が欠番となり、user4のplayerIDは4になる。
  >  
  > > 1 : user1
  > 3 : user3
  > 4 : user4
  > >  
  >  
  > また、ここでuser2が戻ってきた場合はplayerIDは5になる
  >  
  > > 1 : user1
  > 3 : user3
  > 4 : user4
  > 5 : user2
  > >  
  >  
  > [https://kurotori4423.github.io/KurotoriMkDoc/VRChat/UDON でギミック/](https://kurotori4423.github.io/KurotoriMkDoc/VRChat/UDON%20%E3%81%A7%E3%82%AE%E3%83%9F%E3%83%83%E3%82%AF/) より引用
  >  

例は、`Start`イベント時に、`_player`変数にPlayerIDが1番のVRCPlayerApiを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1VXW/TMBT9K5Wf48jfsSvtga2AqkkwUegLqiI7dlAgdarEGVTdftke+En8Bdx2DOgKVGOVEEoe4mvn6px7z7n+cvN5BS513TswfLsCZV/XL/Q8LsBUt5U2tcunr84mo/NT3bn4dVHrpWufLCqQgL6y8VxhpWUmM1BgziFDhEDDEYPGFqKUiulSZvHwoumqUDUeDFfgExhCgjhLhVKKY5xhmfEELGMYEylSKqRUgklGM36dAN9Y92Y86iJCEDN9f2cJKOvm4+3ebHtyuibTbdj0vgrLl+a9K8J0S3EFKt8F7Qs3HoEhism70Fb+3e02ANfJQ36bLLvg5ulkE0wG865o2royyWDq2i6SPmEpWj/J4KyvQ9+6E+/60Oo6GVz0pq6Kc7d83Xxw/sRkmeYFF1hR5pBUV/liU/G/A3baNLXT/nGRPdN15/5PXMdopG98RDVb4/rBZU8vnQ/5JOg23DlKSk0scwJK6jBkJaZQclLCglFqCBEKU7bHUVKlkiOEBEaUYy7o1lESpYIQJbmkao+jfvYQ4MJghbmCxAoLGWcYKoYxJJkthZFIZGUJdp22S2riQv5tfNyxOijzPVaY0t+x4pySWJEYvj8nkMscVwJDW2gNmVYaSqYlVMIaZGNZORNX6Dhz5Ig6OmjePkz9/66ZdxW2/05K8/y5C9vl6XJs83wLbewDJfmfLrJD9LLHdr9Q6EagFGFBecYIlnJXoEcT3Ybt43YBrzswu/4K
```

「VRC」→「PlayerApi」→「GetPlayerById」

![get_player_by_id](/img/world/udon/reference/vrc/vrc_player_api/get_player_by_id.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private VRCPlayerApi _player;

    void Start()
    {
        _player = VRCPlayerApi.GetPlayerById(1);
    }
}
```

</TabItem>
</Tabs>

その他、イベントの引数としても取得できます。

## メソッド（static）

### int GetPlayerCount()「プレイヤー数を取得」

現在のプレイヤー数を取得します。

例は、`Start`イベント時に、`_playerCount`変数にプレイヤー数を代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN2VzY7TMBSFX6XyOo78m9iVumBaQNVIUFHoBlWRk9ygQOpUiTNQdfpkLHgkXgF3Oj+0HaEyUAmhZOHEvtY5yf2Ov3/9tkZXpuoA9d+vUdFV1Suz8A9oZprSpBUk01XrYDG2jjMUoK7M/SSPhWCx5FjzQmARK4KVEDkGQSkhaS7iKPaLl3VburK2qL9GX1AfUyZ4KAO08uNYylBJQngUMUo0V5sA2TqHd+NR67UgX/5wzwNUVPXn27n5buVsK7u90d3Z0q1epx8hc7OdmTUqbeuMzWA8Qn3iN29dU9oPt9MIbYKnlO0+Rji9eRn0Fm1WN1WZBr0ZNK13OhAh2V5Bb9hVrmtgYKFzjamC3qRLqzK7hNXb+hPYQRrHRmYyopoLIEpfJ8vKrKAZ1p11f6buoq4rMPbvynthqhb+T13n+Ju2tl7VfKvrJ6ieX4F1ydSZxt2zpJRhuYAIKw4Ui4JyrCQrcCY4TxmLNOXiEZa0viMpEqH2IFHGSEw4ZXKfpH12kM4YpUYUmHIALCSX2Og8wloYLnMuuYkydEjYoY8puOQuIO6NnLTzkZF9H0JrRSOlfTXlx4lASKG0zgg2BHzuQCxxmkcEZ5LFnBvBeEquyXkS44zNclKcPq3F/11iD3tq9mY4HV1emBb8aHKThc+WZZgkL8FNHqIxefRAOqUxfgXRbzF0TMd88wM=
```

「VRC」→「PlayerApi」→「GetPlayerCount」

![get_player_count](/img/world/udon/reference/vrc/vrc_player_api/get_player_count.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private int _playerCount;

    void Start()
    {
        _playerCount = VRCPlayerApi.GetPlayerCount();
    }
}
```

</TabItem>
</Tabs>

## プロパティ

### bool isLocal「プレイヤーが自分（ローカル）か否か」

Getのみ可

VRCPlayerApiのプレイヤーが、が自分（ローカル）か否かを取得します。

例は、`OnPlayerJoined`イベントの引数の`player`が自分か否かを、`_isLocalPlayer`変数に代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1V22rbQBD9FbPPWrH3i8EPTdxCmtKEuvVLMWZXHgW18iroktY4+bI+9JP6C91ETpo4KZi0hlJWCGlmtcw5M+fox7fva3Thyg7Q8OMa5V1ZvnXL+IKmri6cL2E+WTUtLA+qqgQXUIK6YhHTPiOOeCqw9iCwENZgoxjFnuVAJQA11sTN51VTtEUV0HCNvqIh1kKljBCiOROMGi0TtIphGcNC3gtfJShUC/hwNG5iYSie9OuaJSgvqy+b3KzfOb3G0NyA6ELRrk78J8jaaY9sjYrQtC5kcDRGQxIPb9q6CGebNEJXyXM+65lJJzfBZLBssqouC58MplA3EfRIpOR6JYPDrmy7GkYBurZ2ZTI47XxZZMewel99hjDyWjuZSUUtF0CMvZwXzZsqc+Vp6VZQ/1l9m9b93QJfubKB/7OuffQzVCFWNbuu657GXl5AaOcnoe/y66oIsLhTmOILwbXTUVfSYMGFxt4whr0CyB0HrrV/QmFUq9REhXEulY03eysxm1otCaNcMU6Esg8l9lBUiBKzyKUiWFEusciBYQOZxotMyVx4Q3KSo23pbcObvjucjI8PXAPxqcf44rxI5/MzaG8HfP4bfzEyz3LlTIQrWUSf5dg5obChllGbE+MFe4ye0jRakTVUGSskp6wHr0jKWLQXRQmXVCpmtvxlF64vyV6cZ5u0SeTm1nvv2NipHY/ZiKOgbaRDa8usMlr1o7Chg6to2MTyp9x2F/ojIXtx4z3KcKe/1vPM49/1wllcPwE=
```

「VRC」→「PlayerApi」→「get isLocal」

![is_local](/img/world/udon/reference/vrc/vrc_player_api/is_local.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private bool _isLocalPlayer;

    public override void OnPlayerJoined(VRCPlayerApi player)
    {
        _isLocalPlayer = player.isLocal;
    }
}
```

</TabItem>
</Tabs>

### string displayName「プレイヤーの表示名」

Getのみ可

VRCPlayerApiのプレイヤーの表示名を取得します。

例は、`Start`イベント時に、`_localPlayerName`変数に自分の表示名を代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1Vy07bQAD8lWjP3mi9742UQ4FWQlQUNW0uVWTty8hlsZEf0CjwZRz6Sf2FbuIABdI2oo1U1fbB9q7XM+OZ8bfbrwtwqUPnwejTAuRdCMf6PF6Aqa4LbYLPJvOm9eeTti7KU5CArnBx1BCaa8QN1C4nkOacQG2lgDnOuc85TY2hcfJF1RRtUZVgtABfwAimjKIhQQgrrLgULAHzeJdzOkQIpRgjgUiK2U0Cysr5j4cHTYQF4kIPxywBeaiu1mOzfuZ0yaBZUejKop2/M5+9bac9rwUoyqbVpfWHB2CE4uLNisx6GICb5CWP9boMe2GSwXljqzoUJhlMfd1EzuNIarkng/0utF3tx6Xv2lqHZHDSmVDYIz//UJ35cmyE0MwynipCPZLqOguV1eEk6LmvV5/jjxDuVVXwuvy7EN/o0PynuHbxRcuqjKhmS1w/ZGzi2+wuZ/fRop6nRKscImMxpM5SqFPOIJJYWkZzJ3L7PFqplEMk2EOIeJ8tppbRQkhwrIiijDzPFuEUE2UYNNYZSKXT0BBCISfIa2Y4dQJfo91kb4eSb1VRLzPKv+v7pw6bvt+fHBzt6cbHs75QXl0Uwyw7jdZzRXMRby2nZptrfhtrbKh5vrKiIJji9K7l10ZMGWZSSIX4EyMiKz3z3EEjrILUWgQ1cRI64hDF3JD4ZHThLur/56Id+/aqqs/i7LVkbx+KOcs2i3sv3jaMNv0j10lmQklClKRr/eRQxY0rKntZ5WMBfy3MU4qvL33ZZpNW1+09Xs7jWxGjEJsYk/gOCxWzNoL2UuZeKUrU9nh/1zyP8W7Xes9ZzW6+Aw==
```

「VRC」→「PlayerApi」→「get displayName」

![display_name](/img/world/udon/reference/vrc/vrc_player_api/display_name.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private string _localPlayerName;

    void Start()
    {
        _localPlayerName = Networking.LocalPlayer.displayName;
    }
}
```

</TabItem>
</Tabs>

### bool isMaster「プレイヤーがインスタンスマスターか否か」

Getのみ可

VRCPlayerApiのプレイヤーがインスタンスマスターか否かを取得します。

インスタンスマスター：Ownerを委譲していない全てのオブジェクトのOwnerになっている人。

:::warning インスタンスマスターの仕様変更

インスタンスマスターに関する仕様変更が起こる可能性があります。  
今後のアップデートに注意してください。  
[https://ask.vrchat.com/t/network-update-season-master-transfer-creator-feedback-wanted/23026](https://ask.vrchat.com/t/network-update-season-master-transfer-creator-feedback-wanted/23026)

:::

例は、`Start`イベント時に、`_isMasterPlayer`変数に自分がインスタンスマスターか否かを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN2V3W7TMBTHX6XydRz54zi2K+2CbSBNgzFR6A2qIsc5RWFZMuVjo+r2ZFzwSLwC7tp1o+OjGlRCxLlIbMc5/5/9P+fr5y9zcunKHsnw/ZxM+7I8cefhhYxdU7isxHQ0azs836/rEl1FItIXeRjWTCvMrKWWS6Dgpgm1LrdUGJv7RHIAnofJF3VbdEVdkeGcfCJDyjkXMWglgWubGK0iMgvdYE3MwpVwJhVXidA3EanqHN8dHbYhMhKWur8nEZmW9dVqbLKcOV6IaG9V9FXRzV5nH9F346W0OSmqtnOVx6NDMmRh8bZriurDapiQm+gpny3RxKPbzmhw3vq6KYssGoyxaYPqPYjZokWDg77s+gb3Kuy7xpXR4LTPysIf4+xtfYbVXqa1U14l3EpAZux1WrSvXFi9OS3dDJs/C3C1eX83wheubPH/jGsXG1rVVYhqsojrgcueX2LVpaPONd3aWkmiFWMKqMiMpiC4p1Z5T51EY6ZoLUj7I2tpGRuhOLeMG6VAL62lTGwXl5CaJWHVDWd97yUCTmn0gHTqMfxb8YyaoISiYR4SkYCBKdl03Kao8ZuD0eHxvmvxBLurujkLMOM0/YBd+rL2rlwe6TS9nxeelp3PLoo1B+YNKkxymmlvKXjPAoLc0FzmDESSSa7E1hxWGAxo4IIzC7/CsL3Ah4GvJN4ZN/1J5kRvdJZpRWWe5xSACepcpmkW4DovtHIcHsuysRZgDDApBZNcqG1UbYXwmu0koW4yGwU0dzVlzWKr4/aIxWqHmZYiuGNdRH5z0helYxv2gcdOaswOc8tWxfhpGfHfTfCT0L4B
```

「VRC」→「PlayerApi」→「get isMaster」

![is_master](/img/world/udon/reference/vrc/vrc_player_api/is_master.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private bool _isMasterPlayer;

    void Start()
    {
        _isMasterPlayer = Networking.LocalPlayer.isMaster;
    }
}
```

</TabItem>
</Tabs>

### int playerId「プレイヤーのPlayerID」

VRCPlayerApiのプレイヤーのPlayerIDを取得します。

似たような関数として、`VRCPlayerApi.GetPlayerId(VRCPlayerApi player)`がありますが、基本的にはこっちを使うとよいです。

（この取得方法だと結果をキャッシュしてくれます）

例は、`Start`イベント時に、`_myPlayerId`変数に自分のPlayerIDを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1V3WrbMBh9laBrK8jWf6AXa7tB6OjKsuVmBCPJcvHq2MWW24W0T9aLPdJeYV+aNP1lM90CY5YR9idZ/s6Rzvl+3HxfogtTdh6NvixR3pXlsZnDC5qapjC29Olk0QY/H1eBJihCXZHBoKU605ZxzCQnmCXcYJvJBHsvnaZSGgjB5PO6LUJRV2i0RN/QCMdMsKEghGgpuEh4hBYQFRCEGBExoTzmgl5HqKoz/3l82EJWCBa6v2cRysv6cjM2W8+crgC0twi6qgiLD/ard2G6hrVERdUGUzk/PkQjAou3oSmq080wQtfRaz5b0zKc3Aajwbx1dVMWNhpMfdMC5j0AtWrR4KArQ9f4vcp3oTFlNDjpbFm4I7/4VJ/5as8CX9xxEWvKPFH6Kp0vTkqz8M04+7Pk9uu69Kb6u9m9M2Xr/8+8drGZVV1BVrNVXg/U9fbCVyGdBNOEraiEADERznBilQRRxQ5r7hw21CuVe60Z1S+JSuhhzFeiijlPJGUbWXE11KsroZIIWFY+ltVjISENf7GKJ5hqlmNGncVKg6KFdY7SGLBwip7K7Smq6ceDyeHRvmn9sQ+XdXMGbA7T9NSH9H3tTLk+1Wl6Pw+e1sE358WWCOKU515k2IKbYOYcAQ4yhTOaEZYIS2Oe9Cdiw4NiksVJTDT7FQ/9ET7MfIPxfCPa9EXPJLGSxDCJM2HBOLUlWFuR48wJwpTIXU7oc1T81i+FjKmCTslemHoxeEV2YqZPGZsAMXe1ZMtFr9P2jIu7DU4YixnZ1o/fHPRV2ejDPfCxk/qyQ2/pVYZf54j/rsHPoP0E
```

「VRC」→「PlayerApi」→「get playerId」

![player_id](/img/world/udon/reference/vrc/vrc_player_api/player_id.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private int _myPlayerId;

    void Start()
    {
        _myPlayerId = Networking.LocalPlayer.playerId;
    }
}
```

</TabItem>
</Tabs>

## メソッド

### bool IsPlayerGrounded()「プレイヤーが接地しているか否か」

プレイヤーが接地しているか否かを取得します。

例は、カスタムイベント`CheckIsGrounded`時に、`_isGrounded`変数に自分が接地しているか否かを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN2VW2/TMBTHv0rl57iyHTu2K+2BdYCqoTFR6AuqIl9OR1iaTLlsVN0+2R74SHwF3GZ3NqgGlSbiPMTHl/zP8fkd/7j8vkSnJm8BDT4v0azN8wMzDx00MVVmbA7peFE3MN8tyxxMgSLUZj4Mey2po8phIZIZ5kJ4bCEBnHBruWUkJjMWJp+UddZkZYEGS/QNDbBMVJ8IQrhSTFEmIrQIVqZVX4cn0Vwxzqi+iFBRevg02quDLhQ2un2nEZrl5dnV2LSbOVm5UK99aIusWby3X8E1k86xJcqKujGFg9EeGpCwed1UWXF0NYzQRfScZV1g+uO1MerNa1dWeWaj3gSqOvi8w/tk1aLesM2btoKdAtqmMnnUO2xtnrl9WHwsj6HYsVIa4URCdcyBKH2eZvXbqmwLD/7vxF0d279V98bkNfyfurZxmEVZBFXTla67fH0Yjvf2d00NB9CcldVx+G8/TY+gSd+VzuSHuVlAlaa388JXZ3x1kt1wSJwCAUmgTzqNuXMEm9gr7GNPOEtsTMVjHFIl+4QFEDUVgsmYdyRK0Q82EtYIJZUmyX0Qf4/eQw/HwZXrKnKj1xIrw+Yaz2JOMdcccJAAOFbxjLlYMMbtr3o7uVwncbyWxZKucPxB76peWO0o1dRgY63EXGmOFRCOvfEAFoB7Kc/JdgrLFpNqo/r7PBReLtlPM3SXjUDRqO5610U0feIW2yQ5HqOHreFhnFMeknEjdjYiNSTiNq63h3F7fQpFkw7buinnN7FwnpnYSr+KwEqfp9gaYrCgPk4SLUzC9eaVZIUmD1e6lJRSRRP+kMz7fm5WF144k8Mv4I5Hd27uaWg/AQ==
```

「VRC」→「PlayerApi」→「IsPlayerGrounded」

![is_player_grounded](/img/world/udon/reference/vrc/vrc_player_api/is_player_grounded.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private bool _isGrounded;

    public void CheckIsGrounded()
    {
        _isGrounded = Networking.LocalPlayer.IsPlayerGrounded();
    }
}
```

</TabItem>
</Tabs>

### bool IsOwner(GameObject obj)「GameObjectのOwnerか否か」

指定したGameObjectのOwnerか否かを取得します。

Owner：オブジェクトの同期を行う権限を持っている人。`Networking.SetOwner(VRCPlayerApi player, GameObject obj)` で変更可能。

自分がOwnerかどうかは、 `Networking.IsOwner(GameObject obj)` というメソッドでも判定できます。

例は、カスタムイベント`CheckThisOwner`時に、`_isThisOwner`変数に自分がこのUdonがくっついているGameObjectのOwnerか否かを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN2W2W7TQBSGXyWaa48125mlUi8gBVSBAFHIDYqsGfukmDo28kKJCk/GBY/EKzBZmi60VQSthIhzkczi/P8/53zxz+8/zshnXw1I9t6fkdlQVS/9PH4hE9+WPlSYHS26HuePm6ZCX5OEDGURpwtneM5tTgH0jCqAggbUSLUKQQXBJJuJuPhT05V92dRk74x8IXtUgLYpABNOOG0NJGQRR52VqXbOAeeGx9FvCambAt8dHnRRFon3uXhPEzKrmtPN3HS9crJ00K0sDHXZL16Fj5j3k7WvM1LWXe/rHA8PyB6LN+/6tqyPN9OEfEv+ZNs6l/RoNZiM5l3etFUZktEE2y5a3lcpW17JaDxU/dDifo1D3/oqGb0eQlXmz3HxtjnBej8Y4yEHzZ1UyKz7mpXd2w9l9+q0xvbv1G2O7X7lPfVVh/+nroc4zbqpo6rpUtfl/nozPjp4/th3+BL706Y9ib+bZtkx9tmLJvfV68ovsM2yi3Xx03rw0ady24cstwioY/eZ3FGV54x6WVhayIIpoYPkcGMfcpaCAc6kAWc0aLnqRJ5KEZvTKA029jAX+mor3t181y0++Yx1n42Hrm/mW8F5IbwMpqAW2VJwwWnwzFPghdTagdfK3QgOmXIRBWvLoyWpztFhUm5URIcSQmop7HV2XJVMAgtGgHV0JhWnyimkjgNSaeVM5BKEUIHcB1UesKDGHzA/uQSI67kfxRo6x/c2952M/5b7JnamY6UABy30jrEnBEAWQaCjzhlDldU+HjkK6jxf6vDcWf2VPQzSHzD8nf74/oxB/y5Sd4TX4boib4NW9m7p7Ul9XNb4LN5o7TK75Qljl/q5ARQRbNoAM9EBmCXCzkGxGo7HA9yAsVxeq9hdQLoqV1fYgscXZV5FXTxu8UJoisByhx4goI0L/5nnlN9Pb9zEDdkSINuwdzF1U9igVlQWgl3KegWHy1nfzeT7yWYar18=
```

「VRC」→「PlayerApi」→「IsOwner」

![is_owner](/img/world/udon/reference/vrc/vrc_player_api/is_owner.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private bool _isThisOwner;

    public void CheckThisOwner()
    {
        _isThisOwner = Networking.LocalPlayer.IsOwner(this.gameObject);
    }
}
```

</TabItem>
</Tabs>

### bool VRCPlayerApi.IsUserInVR()「プレイヤーがVR環境か否か」

プレイヤーがVR環境か否かを取得します。

例は、`Start`イベント時に、`_isInVR`変数に自分がVR環境か否かを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN1V207bQBT8lWifvdbeL5F4KNBKERVFpOSliqzd9TFyMTayHWgU+LI+9JP6C90QoAUCiihIVW0/2HvTnDkz45/ffyzQuatmgIZfFqiYVdW+O40faOLa0vkKsvG86+F0u2kqcDVK0KzM43RuNQ3UBCylKrCQMsceFGAlvBeeEU4KFhefNV3Zl02Nhgv0DQ0xF5qlRhJppOVaJmgeBymjLFXWWkmppkbLqwTVTQ5Ho90uwkLxnN/PNEFF1VzczE1XKyfLCrrrEmZ12c8/+a8Q+smqrgUq6653dYDRLhqSeHjXt2V9fDON0FXykm0rXtLx9WAyOO1C01alTwYTaLtY8pZIyfJOBjuzqp+1sFXDrG9dlQwOZr4qwx7MPzcnUG95rZ0MUlHLBRBjL7OyG9WTw78DdtOx10X2wVUd/J+43qKRdVNHVNMlrj+sNYY+u7XXnaE88ZpJY3HBBcXCCsCWSsDc8IIFLhkT/rGhGNEplYQYKYRl0TtqZSkpU7K8tGKWWyH5Y0vxuBdobjFTRGEBzmJnbY5FTnguqNemKC7J21juDSnfKJheJpR/V/cPFTY53Bnv7m27DuLbQeXm0L47K9MsG3VHHbTLcMmeCPZNZLEm2BlNWUxwo7VlVpnbaJcilc/pkAQDElTskQ4WixAIdjw3OOc5EUx5TiWLIryvwM288jq/hqeZ3Yf+omlP4urI63G09McmuGpFdpat78Ady5vUvY7laHcSCVWCGGWpIPqa5qXb7xP7vGUfFvX+HOo+G/eu7e8QWu1VgAipkExjQazEnkaicwMk0GApM2vyCD8ZSM8L4UGDNxLh46qmV78A
```

「VRC」→「PlayerApi」→「IsUserInVR」

![is_user_in_vr](/img/world/udon/reference/vrc/vrc_player_api/is_user_in_vr.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private bool _isInVR;

    void Start()
    {
        _isInVR = Networking.LocalPlayer.IsUserInVR();
    }
}
```

</TabItem>
</Tabs>

### TrackingData GetTrackingData(TrackingDataType tt)「プレイヤーのトラッキング情報を取得」

プレイヤーのトラッキング情報を取得します。

対象が自分自身の場合はヘッドセット/トラッカーからの情報が使われるが、自分以外（リモートプレイヤー）の場合はアバターのボーンの情報が使われます。
（＝自分以外の場合は、アバターのボーン軸の向きによって正面が変わるので扱いづらい）

#### `TrackingDataType tt`の一覧

- Head → 頭
- LeftHand → 左手
- RightHand → 右手
- Origin → VRのプレイスペースの中心 or プレイヤー位置
- AvatarRoot → アバターの一番親のGameObjectのTransform（＝FBTの時は、AvatarRootの正面と実際の顔の正面は一致しない）

戻り値のTrackingDataからは、位置(position)と回転(rotation)が取得できます。

例は、`Update`イベント時に、`_td`変数に自分のトラッキング情報を代入し、`_headPosition`変数に自分のトラッキング情報の位置のデータを、`_headRotation`に自分のトラッキング情報の回転のデータを代入する処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO1Y21LbVhT9FUav9dGc+4UZHpqQppl0UhrAL4HxnJuoGiExshziAF/Wh35SfyHbV8AyQaUwIQy2xz62jqx9WWvtvfXv3/+cJZ9sMYrJ5oezJBsVxTt7DF+Svq1z64o46L9/ubv99oUdRljtFHYc659P8r3a+o95ebRtG5v0klEe4BzNXTA6kyjIEBHHWiKtMUbcMuKdJU7hDDafVMO8yasy2TxLPiebiGLBUtFLxrBWjKcGHkwbyTVn+qKXlFWI+2+2h2BiAqdfvg57SVZUp/Njh7Od/Yk3w6k7ozJvxr+7v6Jv+jMfz5K8HDa29PHNdrKJ4c+HTQ1uzA8nyUXvLqftjodNPE53pz/2No6HvqqL3PU2+rEegqdbPMWTZ2/j5ahoRnXcKuOoqW3R29gZuSL3b+N4r/oYyy2nlBVeSGIYj1ib80ET/p9RL6qqiLa8X6t+scUwPk27HiKJZVWCVYcTu9ZRbH9i66vyKC9jH+ytaraklDGE2CxoxIODNwKUcko4JAmzghOXGcufKfUfKfVntGFnEbEnCeLHatf3JdcfI9vEupxkfcEvp6yM0SgkvZKIG0aQUZKgwDGNPMPGOPbMrzvw633V2Gd+PV1+vfoUy2awfxKAUpcNoLeZdB7ow2KAkiUV0sJwRDSjNHilFMNr2MQVTzkwSBquKafEzIhFOJsSS8NxQgk24jqzrnMpgSsbbTBcV0WDuFcESmUwyDsidCTKeZMlq4xbdWs3NoOFdCzd6vTPbbeEnnq10AUlurk10Qn4EXsHF7OYgCxZHZD2PEMskwquSEnmxTluC0pihdZUB9juoEvgkltowTOFWDBcCKIJ0e0gPDLAdRoj7kaTx8v6Vv1ajl3vYnNa1ZNhKx0MjgCfv1XeFrNJbHDDeHZZ3xy0jFRYxFwQEzxoZLjMkNOa6WC1YSLcwEg2YSRjCpAvqZphl4spdAWnlElGNfkWI2/j2nrTwcnXsbk6X97k5NU9e+OT2GXfMjBdGLYmMAyTFAOrtVKGGgkf88DIawqm1WoX0CUR6xj9HVsEiGE6D2d6NZ4/rQYeaLAM/CUlSFdKlACJ81+hZ2izYK0cd9K4VuoIQHpFgZfKLNsKHGMQ3hODJAuAD4Upci7LEHYOWkKYvLDmaxVYee+pZgGFwME6YT2yABVEMyYjDpm2zD12Be40dT51BX69DnvOEIk5ZBdKN8BCEIWMUxxhgET0JCoi1s3jIAipwlrBVMGWnYAEhsCDCCr0VGVXUXj/SvCjVu1upeOqLs1r5SIRg2/dZOnC9XZScdotjV0gA0py/8nupN/3od1nB8vYHIBZB8nng0l4cO8gGS9XX2arC1jW89nw1s2wOp2fdtGxOHSS31Yu+dXiwCdWrtYDrkRUTFpEA4YsQr1GlrCIRAbokDYYKchD1e8HZG2n+x9PXek7q8kCuINb7ip1AUsbhFRev5E07y1vnRepVoYZZ5CKGUE8A+VySlLkYbfHxAUW7LPA3EFg1nYAXaLdzq3EqVFQG7jhhMM8Jbql9scSkwduAQ4vvgI=
```

「VRC」→「PlayerApi」→「GetTrackingData」
「VRC」→「PlayerApiTrackingData」→「get position」もしくは「get rotation」

![get_tracking_data](/img/world/udon/reference/vrc/vrc_player_api/get_tracking_data.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    private VRCPlayerApi.TrackingData _td;
    private Vector3 _headPosition;
    private Quaternion _headRotation;

    void Update()
    {
        _td = Networking.LocalPlayer.GetTrackingData(VRCPlayerApi.TrackingDataType.Head);
        _headPosition = _td.position;
        _headRotation = _td.rotation;
    }
}
```

</TabItem>
</Tabs>

### void TeleportTo(Vector3 teleportPos, Quaternion teleportRot)「プレイヤーを指定した位置・回転でテレポートさせる」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

プレイヤーを指定した位置・回転でテレポートさせます。

:::warning Network Update中のテレポートについて

Network Update中（OnDeserialization、FieldChangeCallback？）にテレポートしようとすると、バグで体が取り残される可能性があります。  
`UdonBehaviour.SendCustomEventDelayedFrames` 関数で1フレーム処理を遅らせることで対処可能です。  
[https://creators.vrchat.com/worlds/udon/networking/#debugging](https://creators.vrchat.com/worlds/udon/networking/#debugging)

:::

例は、カスタムイベント`Teleport`時に、Public変数`teleportPoint`の位置・回転に自分をテレポートさせる処理です。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO1Xy27bRhT9FWO21RDzfhjworHSIkibuLWjTW0Qw+HQYENzDD7iKLa/rIt+Un4hVxItKZbQqrEdeFFQixE5nDn3nnPPHX7+6+9r9MFVfUD7f1yjoq+qN+4C/qCJa0qXVSF9V5fd9GV9XtbhpHF1W8TmAo1QX+YwS1nNKLEea58xLIwqsHW6wCQvPKNaM8cYTL6MbdmVsUb71+gj2sfMWJFISZhlVhktR2gKdylTJNGWcWm4NYJreTtCdczDu1fjFvAhWGn1OxuhoopXw7OzxczJLJR2Hks/w/02+zP4brII8BqVddu52odXY7RPYPG2a8r6fHiM0O3oW147nrZduEiO5zdHexetj01VZqO9SWhaCPpAJGR2jfYO+6rrm3BQh75rXDXaO+qzqvSvw/Qkvg/1Qaa1k14qarkIxNibLlThMjbdUSzr7mHwXsRYBVc/Lr6TBrZ4frB+clX7QFxPwWYda0B1NsO1VmgvP4S6Sw/7touruvJMqjwLATuqKBZSK2w8z7Dk1FgPhcUd2VZXjCZKS0INp0QKZcxQWVwmhDMiOCxFOBTa/cr6upoQYVDX0hGcGwv760JjZ7MCBy0LGzJVSFqgx6i5J0z3yVA8mymf/H54PH79wrXhTeiuYvMe9k7S9Dx06S/Ru+qoctPQpOlqHowWN3+8LJckOdjSF1RgyJTEQjGNLTMC26IQhVECrE1tIYlakggmLAOmtKFscD/JEgoUEa6NoNoq+zVF/2x39yP8GUK5c/AlXmoKlnlusWecY+G4xpkNFGdEae+Cl4LLbaKSJAGUhBNJ54j5HLAwiQKchtiFpDbM+vEN+gnFslMj+zZH2dTftpY66O8u+el6353AZrHhSyIzbWXmJcdUBINFls3AEoIDN0YwmWsTxBYi1Ux3kghj2FJ2wKJRsBxYgxXgLszco3EX0dyQJ+nGO4k6D2BOAfwxFxbwGQ65CELjnFkLcrWFd9k2UYMj0k2npFLP87FU9b8Y5f+q3knVTezchqp/610XmnpGyvI4WQSbCc0w0zJgkVuGjQWdK+iHxHkmoIFtIVPIubCXXOp1Mg2hVGihiOX3tb2Ldr6Ttre3GkjfXRc7idssYXs+03ShqUmErN7ldqeWvpHbwfyHY8SQUEGtZdRsnM93aYg3s3PLLgY2n7iLIOYTn9UXwRopyUDUaG/95mFswq8x76uwqnKya5XXoJqb61P08RT2hhdO0XQ5+rQY3T4C8JWcvi92GF09LAqooGQopgTG6bEPdRiH1jflJXDxw/Glu6rfNiWcu+euBHEsq28VE/1PMY1D4WDe8/0YOoPrCw==
```

「VRC」→「PlayerApi」→「TeleportTo」

![teleport_to](/img/world/udon/reference/vrc/vrc_player_api/teleport_to.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public Transform teleportPoint;

    public void Teleport()
    {
        Networking.LocalPlayer.TeleportTo(teleportPoint.position, teleportPoint.rotation);
    }
}
```

</TabItem>
</Tabs>

### Vector3 GetPosition()「プレイヤーの位置を取得する」

「VRC」→「PlayerApi」→「GetPosition」

プレイヤーの位置を取得します。

![get_position](/img/world/udon/reference/vrc/vrc_player_api/get_position.png)

### Quaternion GetRotation()「プレイヤーの回転を取得する」

「VRC」→「PlayerApi」→「GetRotation」

プレイヤーの回転を取得します。

![get_rotation](/img/world/udon/reference/vrc/vrc_player_api/get_rotation.png)

### Vector3 GetBonePosition(HumanBodyBones bone)「指定したボーンの位置を取得する」

### Quaternion GetBoneRotation(HumanBodyBones bone)「指定したボーンの回転を取得する」

### void EnablePickup(bool enable)「ピックアップをできない/できるようにする」

### void SetPlayerTag(string tagName, string tagValue)「プレイヤーにタグを設定する」

タグは他のプレイヤーに同期されません。

### void GetPlayerTag(string tagName)「プレイヤーのタグを取得する」

### void ClearPlayerTags()「プレイヤーのタグをクリアする」

### void SetRunSpeed(float speed)「プレイヤーの走る速度を設定する」

0から10の値を設定する。

注：対象が他人（リモートプレイヤー）の場合は動作しません。

ここら辺は、SDKについてくる「VRCWorldSettings」からも設定できます。

![vrc_world_settings](/img/world/udon/reference/vrc/vrc_player_api/vrc_world_settings.png)

### void SetWalkSpeed(float speed)「プレイヤーの歩く速度を設定する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

0から5の値を設定する。

### void SetJumpImpulse(float impulse)「プレイヤーのジャンプ力を設定する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

0から10の値を設定する。

### void SetGravityStrength(float strength)「プレイヤーにかかる重力を設定する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

0から10の値を設定する。デフォルト値は1。

月の重力にしたいなら、（月は地球の重力の約1/6なので）0.166を指定すればよい。

### void SetStrafeSpeed(float speed)「プレイヤーの横に動く速度を設定する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

0から5の値を設定する。

### float GetRunSpeed()「プレイヤーの歩く速度を取得する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### float GetWalkSpeed()「プレイヤーの歩く速度を取得する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### float GetJumpImpulse()「プレイヤーのジャンプ力を取得する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### float GetGravityStrength()「プレイヤーにかかる重力を取得する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### float GetStrafeSpeed()「プレイヤーにかかる重力を取得する」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### void UseLegacyLocomotion()「ロコモーションを古い形式に設定する」

### void Immobilize(bool immobile)「プレイヤーを動けなくする/動けるようにする」

注：対象が他人（リモートプレイヤー）の場合は動作しません。

### void UseAttachedStation()「プレイヤーをUdonがくっついているGameObjectの椅子に座らせる」

Udonが追加されたGameObjectに、VRC_Stationが必要です。

### void SetVelocity(Vector3 velocity)「プレイヤーに速度を与える」

### Vector3 GetVelocity()「プレイヤーの速度を取得する」

### void PlayHapticEventInHand(PickupHand hand, float duration, float amplitude, float frequency)「コントローラーを振動させる」

### VRCPickup GetPickupInHand(PickupHand hand)「プレイヤーが指定した手に持っているものを取得する」

### void SetVoiceGain(float gain)「プレイヤーの音量を大きくする」

0から24の値を設定する。gainの単位はdB。デフォルト値は15。

### void SetVoiceDistanceFar(float far)「プレイヤーの音の減衰を設定する」

0から1,000,000の値を設定する。デフォルト値は25。

0にすることで、プレイヤーをミュートにすることができる。

### void SetAvatarAudioGain(float gain)「アバター音量の上限を設定する」

0から10の値を設定する。デフォルト値は10。

これより下は、誰も使わなさそうなので、説明を省略します。

もし詳しく知りたい場合は、以下のページを参照してください。

[https://creators.vrchat.com/worlds/udon/players/player-audio](https://creators.vrchat.com/worlds/udon/players/player-audio)

### void SetVoiceDistanceNear(float near)

### void SetVoiceVolumetricRadius(float radius)

### void SetVoiceLowpass(bool enabled)

### void SetAvatarAudioNearRadius(float distance)

### void SetAvatarAudioFarRadius(float distance)

### void SetAvatarAudioVolumetricRadius(float radius)

### void SetAvatarAudioForceSpatial(bool force)

### void SetAvatarAudioCustomCurve(bool allow)
