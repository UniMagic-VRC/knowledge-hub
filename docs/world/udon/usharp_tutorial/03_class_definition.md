---
title: 'クラスの定義'
sidebar_label: 'クラスの定義'
sidebar_position: 4
---

まずは、クラスを定義する前に必要になる基礎知識を紹介します。

## クラスに関する基礎知識

### 変数と型

変数は、オブジェクトを入れておく箱のようなものです。

変数には、入れるデータの形式を定義しておく必要があり、この形式を「型」といいます。

多分[ここら辺の説明](https://wa3.i-3-i.info/word1603.html)が分かりやすいと思います。

### メソッド

メソッドは、クラス内部で宣言される関数（処理のまとまり）のようなものです。

メソッドは、何らかのきっかけによって呼び出されます。呼び出されてはじめて、メソッド内の処理が行われます。

逆に言えば、「メソッドを呼び出さない限り、メソッド内の処理は実行されない」とも言えます。

関数とは何？という人は、[ここら辺の説明](https://wa3.i-3-i.info/word1905.html)が分かりやすいと思います。

### クラスの継承（派生）

あるクラスから、性質を受け継いだ新しいクラスを作ることを継承と言います。

ここら辺についても難しいので、[外部サイト](https://ufcpp.net/study/csharp/oo_inherit.html)に説明を委ねます。

### static（静的）なメソッド・メンバ変数

通常のメンバ変数やメソッドを使うためには、クラスからインスタンスを作成し（もしくはどこかからインスタンスを取得し）、そのインスタンスに対して操作を行う必要があります。

しかし、static（静的：内容が変わらない）なメソッド・メンバ変数に関しては、インスタンスを作成しなくてもクラスから参照することができます。

## クラスの定義構文

基本的な形は、以下のようになります。

```csharp
アクセス修飾子 class クラス名 : 継承元クラス名
{

}
```

これを踏まえ、先ほど作ったファイルを見てみましょう。  
（`//`の部分はコメントで、行内でこれ以降に書いたことは、プログラムに影響を与えません。）

```csharp
public class MyFirstUdon : UdonSharpBehaviour
{
    // 中略
}
```

比較しながら、各項目を説明します。

### アクセス修飾子

[https://learn.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers](https://learn.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)

アクセス修飾子は、このクラスがどこからアクセス可能にするかの設定です。  
クラスの定義の場合、基本的には「public」で構いません。

### クラス名

UdonSharpの制約で、ファイル名とクラス名は一致させなければいけません。

### 継承元クラス名

一般的なUnityのプログラムだと「MonoBehaviour」ですが、UdonSharpでは「UdonSharpBehaviour」を指定することになります。

## メソッドの定義

基本的な形は、以下のようになります。

```csharp
アクセス修飾子 返り値型 メソッド名()
{

}
```

引数を取る場合は、以下のようになります。  
（引数は、「,」区切りで複数指定可能です。）

```csharp
アクセス修飾子 返り値型 メソッド名(型 引数名)
{

}
```

### アクセス修飾子（メソッド）

アクセス修飾子は、このメソッドがどこからアクセス可能にするかの設定です。  
他のクラスからアクセスできるようにするには「public」、できないようにするためには「private」とします。  
省略すると、private扱いとなります。

### 返り値型

メソッドが返す値の型を定義します。

組み込み型（いつでも使える型）は、以下のページに記載されています。  
[https://learn.microsoft.com/ja-jp/dotnet/csharp/language-reference/builtin-types/built-in-types](https://learn.microsoft.com/ja-jp/dotnet/csharp/language-reference/builtin-types/built-in-types)

良く使う型は以下の通りです。

| 型名   | 説明                       | 例        |
| ------ | ------------------------- | -------- |
| int    | 数値（整数）               | 123456   |
| float  | 数値（小数）               | 123.456f |
| string | 文字列                    | "mozi"   |
| bool   | 真偽値（真:true 偽:false） | true     |

その他、任意のクラスを型として指定可能です。

なにも返さないメソッドの場合は、「void」を指定します。

----

ファイルを見てみると、既に「Start」というメソッドが定義されているようですね。

アクセス修飾子は省略されているのでprivate、返り値は何も返さない（void）、メソッド名は「Start」、引数は無しのようです。

```csharp
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;

public class MyFirstUdon : UdonSharpBehaviour
{
    void Start()
    {
        
    }
}
```

## クラス変数の定義

基本的な形は、以下のようになります。

```csharp
アクセス修飾子 型 変数名;
```

定義と同時に値を代入する場合は、以下のように書きます。

```csharp
アクセス修飾子 型 変数名 = 値;
```

### アクセス修飾子（変数）

メソッドの場合とほぼ同じです。

### 型

この変数に入れるデータが、どのタイプなのかを定義します。

メソッドの場合とほぼ同じです。

----

実際に先ほど作ったプログラムのクラスに、クラス変数を追加してみましょう。

今回は、アクセス修飾値がpublic、型がstring（文字列）、変数名が「firstVariable」、値が「"first udonsharp variable"」の変数を追加します。

注：基本的に、上からクラス変数→メソッドの順に定義します。そのため、Startメソッドの上に新しく変数を追加しています。

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
        
    }
}
```
