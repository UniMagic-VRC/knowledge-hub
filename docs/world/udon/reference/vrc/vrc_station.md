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

座った時にプレイヤーが動けるかを取得/設定します。

#### Mobilityの値

- Mobile 座った状態で移動可能
- Immobilize 座った状態で移動不可
- ImmobilizeForVehicle 座った状態で移動不可（Station自体が動く場合はこれ）

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO1VXWvbMBT9K0Gvs4K+bMmBvjRlo5RtZd3yMkKQlKviTZGLZW8LaX7ZHvaT9hempEkzCITQNTDGsB8s6Uo+955zrn5+/7FAX7TvAA0+LpDrvH+jZ2mARrqptPEwGb0b3lxc8WE9u6sDhDauJlrdVnVAGeqqaQqWOVOOE4uJlQoL6hQuBZeYlwIoz5UsGE/Bd3Ws1vsGC/QNDRQr+nmG5mjARfpaZijUU/hweRETGJTid+84Q87XXzdr44fI0Qp3XAPvQtXO35pPYNvRQzYLVIXY6mDh8gINSDo8tk0VbjfLCC2zp2y7mccWZv2b9WTWm0VbN74yWW8ETUypnYk+WT1Zb9j5tmvgLEDXNtpnvevO+Mpewfx9/RnCmZFS5zYvaMkFEFXex01R/wjYeV170OF5kb3UPsK/iesURIbkE7Qcr3D9ZqhX0E62pno0TpkTp6QmmFqTJ+NMp9hILrCEIicUmCiM2zcOpkRtnIMLse+c53fLCat1VO94Gsf7JBxoZv3J5DZRdO31HJrXtal8+t1k0/7OdYRd6Hb1kUabUymBEcyZBJzQW1wyybDhtgTurOaq3KfxMIvHSOOenKQzHiVdWYDhRlLslGZYTIXFijGHc2YVB0emjNKD0v2v3OdTbnyqco3jmgiWY0ONw6LgBhu7Skk5SNlSnfI7pFxB9kg8RhhJuH/TrZ4K1N/Uqr8r1otttZJYHmu5Ew49VjghsXi/Pmt9LYyXvwA=
```

「VRC」→「Station」→「get PlayerMobility」もしくは「set PlayerMobility」

![player_mobility](/img/world/udon/reference/vrc/vrc_station/player_mobility.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    void Start()
    {
        // VRCStationのMobilityを取得
        VRCStation.Mobility mobility = station.PlayerMobility;

        if (mobility == VRCStation.Mobility.Mobile)
        {
            Debug.Log("座った状態で移動可能");
        }
        else if (mobility == VRCStation.Mobility.Immobilize)
        {
            Debug.Log("座った状態で移動不可");
        }
        else if (mobility == VRCStation.Mobility.ImmobilizeForVehicle)
        {
            Debug.Log("座った状態で移動不可（車両用）");
        }
    }
}
```

</TabItem>
</Tabs>

### bool canUseStationFromStation「座っている状態で別のStationに直接移動できるか」

Get/Set可

座っている状態で別のStationに直接移動できるかを取得/設定します。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO2W227TMBjHX6XydRz5fKjUGzoNTZMAMdYbVEW240yB1JniBKi6PRkXPNJeAffAQGygbqwSQsRRlPgQfd//r58/33z+sgIfTDN4MH67AtXQNC/MIn2AmelqYxtfzF5Pz45O6bRdXLbBhz6uO3rT120AGRjqMk2WnKiKIgeRkwoyXCmoGZWQauYx5UoKQtPkyzbWm3XjFfgExpggkXOEMCFIIooJz8ASjJmSOb/OQGhLf35yFFNkIC3+fs8zUDXtx93YfDtztk4ibrIYQt0vX9p33vWzbWorUIfYm+D8yREYo/Tz2Hd1uNgNA3CdPWbZ2TL2fpGfbTqz0SK6tmtqm41mvospzwnL0bplo+nQ9EPnJ8EPfWeabPRqsE3tTv3yTfveh4mV0nDHBdaUeaT0Vdwp/EeBPWvbxpvwtJEdmyb6fzOuQxgZEjTger6O6we6nvu++EbYLUWao0pJgyB2lieKyhJaSRmUXnCEPWHCVncpglrmOl1UacFUom5LERTsLkVPT84BldtrU3mc33saIoW31EoMK2UIZCVzUBFSQU6cor5CJcF4b0P++/EQP35TdfKiuEhuORPOo9/1HXftYvdaFFsNdpvMrZmoZFRTQqEutYXMVg5qJClkQjKquPFe32Nm8lIwraUSVArNKf4lXPvQe4UOUrweJl58hHjGEm2Rc9CoUqfkCIGWcJ4eSDpZOkklu1e8NQhMcM0IVURtxKM6p+uqTyUlGiPM9U9K7oNdUvIvPAkcsrDNU/sK
```

「VRC」→「Station」→「get canUseStationFromStation」もしくは「set canUseStationFromStation」

![can_use_from_station](/img/world/udon/reference/vrc/vrc_station/can_use_from_station.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    void Start()
    {
        // VRCStationのcanUseStationFromStationを取得
        bool canUseStationFromStation = station.canUseStationFromStation;

        if (canUseStationFromStation)
        {
            Debug.Log("座っている状態で別のStationに直接移動できる");
        }
        else
        {
            Debug.Log("座っている状態で別のStationに直接移動できない");
        }
    }
}
```

</TabItem>
</Tabs>

### RuntimeAnimatorController animatorController「座る時のアニメーションを設定」

Get/Set可

座る時のアニメーションを取得/設定します。

注：基本的にはHMDやコントローラーなどの動作が優先されます。
完全にアニメーションで上書きするためには、FinalIKを使う、もしくはAvatarSDKをWorldのプロジェクトに入れるといった黒魔術が必要になります。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO2W327TMBTGX6XydRz5b2xX6gV0gKZJgDbWG1RVjnMyBVJnShyg6vpku+CReAWcbgy0Tqgbm4QQSm5iHyfnfJ9/Of52+XWNPtm6BzR+v0ZlX9ev7TI+oJltK5vXsJgdT08Ojvi0WZ43HnzohoFgQ9V4lKC+KmKwkkyXnDhMnNJY0FJjI7jC3AigXGqVMR6Dz5uu2q4br9EXNKZKsZQQQhkjinDKZIJWaJwZk5JNgnxTwOnhQRczQ3Hxz3ueoLJuPl/Pza8iZ0MR3baK3ldh9Sb/AC7Mrkpbo8p3wXoHhwdoPLy8C23lz66nEdokD1l2suoCLNOT7WAyWnauaesqT0YzaLtY50SkZLiS0bSvQ9/CxEMfWlsno7d9XlfuCFbvmo/gJ7lSVjqZUcMFEG0uumuF/yix501Tg/WPm9lLW3fwb+b1FEb6CA3azIe8fqHrFYTFD8JuKDKSlFpZgqnLZaSoKHCuuMAKMkkoMJHl5S5FOOIiB4oki6BpQ7ItRTgTqbxN0eOT84TK7fVTeZjfexqiMsh5rigutWVYFMJhzViJJXOaQ0kKRunehvz34z5+/KbrpIvFWXTL+mppQ9NOGx/apq6hXSxOhy+/8GeVh+Peh2oJz3aibtzlWaYhJwQ7BhE3q0zErTC4pEI4p6gpcrXrbjSX7fasu2jbB+cL8iTd7H5qdo+hZsE5kZljmMq4MURuo5oUONbAqTLUOSn0nWoOqJC4d0zcR5Jv1RQkjYcAow2nWguVSXNL2n3AjNL+TWeFwZT55js=
```

「VRC」→「Station」→「get animatorController」もしくは「set animatorController」

![animator_controller](/img/world/udon/reference/vrc/vrc_station/animator_controller.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;
    public RuntimeAnimatorController animatorController;

    void Start()
    {
        // VRCStationのanimatorControllerにセットする
        station.animatorController = animatorController;
    }
}
```

</TabItem>
</Tabs>

### bool disableStationExit「プレイヤーがSit判定から出れないようにするかどうか」

Get/Set可

プレイヤーがSit判定から出れないようにするかどうかを取得/設定します。

trueにした場合は、プレイヤーが通常の操作でSit判定から出れないようになるので、別途Sit判定から出るための処理を書く必要があります。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO2W227TQBCGXyXaa6+150Ok3NACqioBopAbFEW79rgyOHaVtaFR2ifjgkfiFVgnoVQtitzSSAih9Y1nZ63Z/9c34+9fv63RZ1d1gMYf1qjoquqVW8QXNHXL0vkK5tO3R2fHp/yoWVw0NdRt6AOta8umRgnqyjwma8lMwUmGSaYNFrQw2AquMbcCKJdGK8Zj8kUTys258RpdojHjRKeUyQSt0NhSksrrBNVNDu9PjkOsB8Ujv55Zgoqq+bLbm20zp33pYVN7V5ft6rX/CFk73V5ojco6tK7O4OQYjUn8eGiXZX2+20boOnnMsbNVaGGRnm2CyWgRsmZZlT4ZTWEZ4u0mIiX9SkZHXdV2S5jU0LVLVyWjN52vyuwUVu+aT1BPvNZOZlJRywUQY6/CTtc/KuxZ01Tg6qet7IWrAvybdR3CyDqigq5nfV23mHoJ7fwnVzfsWEkKox3BNPMyspPn2GsusAYlCQUmlC/us4MpsaliMUOyyJexRG0wwkqkwlprhBaUxSRxl6mn5+iAOg5qLI9zf6A9WoHnXlNcGMewyEWGDWMFliwzHAqSM0qH2xPdkYTciv53Z6g7e+ZQOp+fR+/yMvTW7YLPL8t2Pt/eftd6bkzNLfVgiMc+eoAF8wX2yioMAnLJtHKW6fum7kFur6lDCL8iBxlwDxMxPEhEKUFnoCV2JkIhNDBsc2mxskXsQAoKw37TuHoRud7OfEFS3gtHlKFRPS70HeWGwBeV+wv/Dg457GZx/QA=
```

「VRC」→「Station」→「get disableStationExit」もしくは「set disableStationExit」

![disable_station_exit](/img/world/udon/reference/vrc/vrc_station/disable_station_exit.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    void Start()
    {
        if (station.disableStationExit)
        {
            Debug.Log("このStationからは出れません");
        }
        else
        {
            Debug.Log("このStationからは出れます");
        }
    }
}
```

</TabItem>
</Tabs>

### bool seated「座る用の椅子かどうか」

Getのみ可

座る用の椅子かどうかを取得します。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AN2U327bIBTGXyXi2ljYgLEt5WaJNlWVtmnZfDNFFsbHlTcClcHbojRPtos9Ul9h5M+6qpGqqmtuJrgBzkHf4eN3bn/+2qBvUo+Ays8b1I1av5WrsECVHHrZaKirD7PF/JLO7OraGjDe7Ta89L01KEJj34ZgwdO8o0RhokSOWdLluGBUYFowSCjPRZbSEHxtXb/PKzfoByopYTxOUh6hNSoTxknMtxEytoVPF3MXBKGQ83cuI9Rp+/14tjxEVjvtbi9+NL1fv2u+gPLVoaIN6o3z0ii4mKOShMudH3pzdTxGaBs9J22xdh5W8WK/GU1WTtlB9000qWBwobwpi8luRJPZqP04wNTA6Aepo8n7sdG9uoT1R/sVzLQRQnLFs6SgDEhe3Ljjw/6TsFfWapDmZZW9ltrB/6nrHEaawAraLne67kH1Bnz9B6w7eApOulxIghPV8ABP2+JGUIYFZJwkkLKs6U7hwQmh8QGdoPAhNy/Pyhnf6knd43kOn1rwSDuL6/oqGORAemjr+lDx8dPeuZVBo1reMdwmKcNM5hTnaapwHnzjRc5EVrBTtx4z6yn+35CztL9lGL8B
```

「VRC」→「Station」→「get seated」

![seated](/img/world/udon/reference/vrc/vrc_station/seated.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    void Start()
    {
        if (station.seated)
        {
            Debug.Log("steatedが有効です");
        }
        else
        {
            Debug.Log("seatedが無効です");
        }
    }
}
```

</TabItem>
</Tabs>

### Transform stationEnterPlayerLocation「着席する時の位置」

Get/Set可

着席する時の位置を取得/設定します。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO2V3W7TMBiGb6XycVw5/otTqSe0A01DMNGtJ6iqbMepAq49xQlQdb0yDrgkbgGnKwNRqep+KiGEkpN89pe8ft889vev39bgk7StAYP3a1C21r6Ry/gAprKupLJmPn03mowvyMgvb7wzrgldoZFN5R1IQFsVcXLGsCgJ0hDpTECalgLmlGSQ5NSkhImMYxIn3/hQbfsGa/AFDCgipJ9iloAVGKSC5322SYDzhbk+H4coCMSeX/csAaX1n3djs7uZ00572IpvXdWs3qoPRjfTuxWtQeVCI50252MwQPHloakrt9gNA7BJHtM2WYXGLPuTbTHpLYP2ta1U0puaOsTlDWkfdVfSG7W2aWszdKZtammT3mWrbKUvzOrKfzRuqLJMMs14mhNqkMhvw87YJwl74b010j2vspfSBvNv6jpFkC6yAjazTtdvUL0yzfwnWPfw5AyVIpMIplqxCE9RQJURCjPDGUoNplyV+/DANCVRWYcO5FHnn+Q8Py0ndOuo/eNxGR8ZAi6JziTGMH6bQ0q5hpLTDEpBhSSlVnlJD4bwP4OHZHDgUOnP54uY0G4nPHONqS+tXJn6tdfb0nx+3Sk4c4vKmataulD6enmfZNTLIjoFNEgVkJKCwZxJBQuGCMK5oSlX+0kepukYRG/RSU6ohzkXnuKcRlxgLDAUBHd/gEJQSoQhU4hiRhHXMj3kHEV7xh2DVTTubzrdO8tnmx8=
```

「VRC」→「Station」→「get stationEnterPlayerLocation」もしくは「set stationEnterPlayerLocation」

![station_enter_player_location](/img/world/udon/reference/vrc/vrc_station/station_enter_player_location.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;
    public Transform enterLocation;

    void Start()
    {
        station.stationEnterPlayerLocation = enterLocation;
    }
}
```

</TabItem>
</Tabs>

### Transform stationExitPlayerLocation「離席する時の位置」

Get/Set可

離席した時に、どこに飛ばされるかを取得/設定します。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AO2W227TMBzGX6XydRz5fKjUG7aBpiGY2NYbVFW2Y0+B1JlygFVdn4wLHolXwOnKQBuayg4SQiS5iQ/J9/9++ex8+/J1BT6Zqvdg/H4FQl9Vb8wi3YCpaUpjKz+fvts72T+ie/Xioo4+du3Q0JmurCPIQF8WabDkRAWKHEROKshwUFAzKiHVzGPKlRSEpsEXdVtu5o1X4BKMGVc6F4RnYAnGBCmS83UGYl34s8P9NgkCac7Pa5aBUNWft32z65HTQXu7Ed/Hslu+tR+866bXFa1AGdvOROcP98EYpYe3XVPG8203AOvsIdNOlm3nF/nJpjEbLVpXN1Vps9HUN20qb8JyNJzZaK+vur7xk+j7rjFVNjrubVW6I788rT/6OLFSGu64wJoyj5S+arfGPkrYi7quvIlPq+ylqVr/b+p6DpAxZQWsZ4OuX0L1ynfzH8G6CY/mKChpEMTO8hSeooBWUgalFxxhT5iw4W54IEYpL5voQEFznQ4pMcYKC4b07Rw9fXae0budVpOHEd8RCQnUSUMITO8WkDHhoBFMQqOYMjQ4qwO7F4lI1aeDEKUUVlT857Erj3u2m3w+P0+0tmvkwWXZHVdm6ZvXtdu0zOdng4CDeF5Gf9qY2Ia6WdxA5YELoouE0pIA0+ZjE9RgoKXYCsalM4rfhTowRUxrLonkVCNBt5m7n/Auob5Cz7Kn/Zmj7SMcRcwX2BYsFakdZI44qIRlsCA4fTI+OWrl7x1NhmrFJMMEI802jjKUY8YQ5ZRqyjmTtxzdJZPJ0b/pR2FgMVt/Bw==
```

「VRC」→「Station」→「get stationExitPlayerLocation」もしくは「set stationExitPlayerLocation」

![station_exit_player_location](/img/world/udon/reference/vrc/vrc_station/station_exit_player_location.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;
    public Transform exitLocation;

    void Start()
    {
        station.stationExitPlayerLocation = exitLocation;
    }
}
```

</TabItem>
</Tabs>

## メソッド

### void UseStation(VRCPlayerApi player)「プレイヤーを着席させる」

Stationに指定したプレイヤーを着席させます。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AOWWy47TMBSGX6XyOq7i+JpKXTCtQKORYESZblAV2c4JCqRJFSdA1emTsZhH4hVwryzaSlWZQcOgZBHbx8nv8/s7zs8fDwv0VRctoN7HBcraonirp76BxrrOtSkgGb8fjIY3dFBNZ1UJZeNWHY1u8qpEAWrz1AdLHqmMhhaHVirMSKZwzKjENGZAKFdSRNQHzyqXr+f1Fug76nFCWFdEPEBz1IuoEN1wGaCySuHueui8IOTn/L4nAcqK6tt2bLKJHK+0u7X4tsyb+TvzGWwz3qxogfLSNbq0cD1EvdXLXVPn5aftMELL4JJpo7lrYNodrTuDztTZqi5yE3TGUDu/vD7rhqsr6Azaomlr6JfQNrUugs5ta4rc3sD8Q/UFyr6RUnPLBYkpg1DF926b2D8SdlVVBejycZW91oWDl6nrKYwsPStoOVnpOg3VlXbgn24LPYf61Szf80QY0TIjgGMQGjPQBhujBE6liriUVomIHeEp4l7rGiZFu/x/Z2m2TuvL3LLPVdffQ+kNNMkOpz03MQ8zJXWIiTXcn0Npio2kDEsQPCQQMWGyQ24wIXQLDmbhITiPD8sTZuuso/gyj4/Us9P/Bt0kuXOwbSQnCl6SbDIxrrx9OxO1YTISKcFhFvvil4LEJgspppZIZiMaMR0fmkgitvNQ8AMPz9kY96F/K9ExzXSaYbv6LiOUYKVEimWseRwzq4g2PvDZ1M8zwThnWcfA2Cf1SE7/LS7OOlIv92Cy/AU=
```

「VRC」→「Station」→「UseStation」

![use_station](/img/world/udon/reference/vrc/vrc_station/use_station.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    public override void Interact()
    {
        // インタラクトした時に自身をSitさせる
        station.UseStation(Networking.LocalPlayer);
    }
}
```

</TabItem>
</Tabs>

### void ExitStation(VRCPlayerApi player)「プレイヤーを離席させる」

Stationから指定したプレイヤーを離席させます。

<Tabs>
<TabItem value="graph" label="Udon Graph">

```text
application/vnd.unity.graphview.elements AOWW327TMBTGX6XydVzFiR3blXrBWkDTJJgY9AZVkZ0co0DqVIkDq7o+2S54JF4Bp3/GRTtUjQ6NoeQito+tz+fzzyc/br8v0VdVtoAGH5fItGX5Rs18A01UXShdQjp5N7oaX8SjajavLFjXdB1OuaKyKEBtkftgziJh4jDDYcYFpsQILGnMcSwpkJgJnkSxD55XTbGeN1iiazRgXNJ+ErEALdAg4pT2w1WAbJXDh/Nx4wUhP+fXOw2QKatv27HpJnLSaW/W4ltbuMVb/RkyN9nsaIkK2zhlMzgfo0G3eOPqwn7aDiO0Ch4y7WrROJj1r9adQW/WZFVdFjroTaBu/PaGfiPdE/RGbenaGoYWWlerMuhdtrossgtYvK++gB1qzhXLWEJkTCEU8qbZJvaPhJ1VVQnKnlbZK1U28Dx1PYaR1rOCVtNO1/1QnakG/NdlqRZQv5gXdzwRShQ3BLCERGEKSmOtRYJzLiLGeSaSiO7zRKKQebEdTUlC+ux/h2m+zuvzPLNPVdffY+k1uHTH0x04koVGcBVikmnmC1GeY81jijkkLCQQ0USbfXAwIWILDqbhPjinh+URs3VULX6Yx0eaQJSMjcoNznLgXkFMsBBJjrlUTEqaCaL0IRMiubu92D/uwVH396k8+M0PWj9NX14XbttK7yk7abpJxaTy9u1MhBwojTRgE9IIUyYYFp4tbIDIzAjKRSIPlaCdh/iAicfQeRP6VY85QT7wyRSxzpTp6ic=
```

「VRC」→「Station」→「ExitStation」

![exit_station](/img/world/udon/reference/vrc/vrc_station/exit_station.png)

</TabItem>
<TabItem value="cs" label="UdonSharp">

```cs title="UdonSharpExample.cs"
using UdonSharp;
using VRC.SDKBase;

public class UdonSharpExample : UdonSharpBehaviour
{
    public VRCStation station;

    public override void Interact()
    {
        // インタラクトした時に自身を離席させる
        station.ExitStation(Networking.LocalPlayer);
    }
}
```

</TabItem>
</Tabs>
