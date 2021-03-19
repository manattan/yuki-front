# 雪かきpoint計測するくん
URL: https://yukikaki-points.web.app

## プロダクト名

雪かき

yuki-front(仮)
yuki-api

## 機能

雪かきでどれだけ動いたかを計測し、とりあえず1機のデータがWebで見れる
最新のデータで見れる、累積のデータを見れる

### オプション

- 複数台でのランキング
- 日別・月別でのランキング
- 累積の記録

## API仕様(ハード - サーバ)

### POST /post

不定期に来る、加速度センサが止まったらPOSTされる

huit-points == 動きの激しさの積算

```json=
{
    "device-id": "hoge",
    "huit-points": 12345 
}
```

## API仕様(Webフロント - サーバー)

### GET /data/each (テスト用は /test/each)

1日ごとの結果上位１０件を取得

### GET /data/all (テスト用は /test/all)

1日ごとの結果全件を取得

### GET /data/total (テスト用は/test/total)

デバイスごとの累積結果を取得

### body （全てのエンドポイントで同様）

#### request

#### response

```json=
[
        {
            "device_id": "XX0921", //string
            "points": 28308, //num
            "date": "2000-01-01T01:00:00+09:00"
        },
        {
            "device_id": "XX0832",
            "points": 58393928,
            "date": "2000-01-01T01:00:00+09:00"
        },
        {
            "device_id": "XX3322".
            "points": 83211,
            "date": "2000-01-01T01:00:00+09:00"
        }
]

```

## ハード構成
- ESP32
- 加速度センサー
- モバイルバッテリー(電源スイッチ兼ねる)
<!-- - ボタン?電源管理的にはあったほうがよさそう? -->
<!-- - トグルスイッチ的な電源スイッチ -->

### 動作
加速度(X^2^+Y^2^+Z^2^-(1G相当)とか)を積算し、動きが止まったのを検知したら都度積算されたhuit-pointsを送信し、
送信成功(レスポンス201)でhuit-pointsをリセットする
操作は電源入れて雪かきして電源切るだけ

### DBスキーマ(MariaDB)
- device-id(INT)
- point(BIGINT)
- 受信日時(Date)
