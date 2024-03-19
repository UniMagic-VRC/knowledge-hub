---
title: '実際に実行してみよう'
sidebar_label: '実際に実行してみよう'
sidebar_position: 5
---

つまり、先ほどのファイルの「Start」メソッドは、イベント関数であり、スクリプトが有効になった時に一度のみ呼び出されることが分かります。

このメソッドの中に、処理を書いてみましょう。

今回は、UnityEngine名前空間内の、DebugクラスのLogメソッドを使います。  
このメソッドは、引数の中身をコンソールに表示してくれます。  

（このメソッドはstaticなので、Debugクラスからオブジェクトを作る必要はありません）

今回は、`Debug.Log(firstVariable);`としたので、`firstVariable`変数の中身がコンソールに表示されるはずです。

```csharp
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;

public class MyFirstUdon : UdonSharpBehaviour
{
    public string firstVariable = "first udonsharp variable";
    void Start()
    {
        Debug.Log(firstVariable);
    }
}
```

## UdonBehaviourのアタッチ

任意のGameObjectのInspectorに、C#のファイルをドラッグ&ドロップすることで、スクリプトを追加することができます。

もしくは、「Udon Behaviour」を追加し、Program SourceにU#のファイルを指定することでも追加可能です。

![inspector](/img/world/udon/usharp_tutorial/05_execute_udon/inspector.png)

それでは、再生ボタンを押して実行してみましょう。

![console](/img/world/udon/usharp_tutorial/05_execute_udon/console.png)

`firstVariable`変数の中身である、「first udonsharp variable」がコンソールに表示されました。
