<?php

// ----------基本設定開始---------- //

// 送信先メールアドレス
$adminMail = "medical_cast@openloop.co.jp,tsuyoshi.nakamura@openloop.co.jp";


// 送信先メールアドレスを配列化(編集しないでください)
$adminArray = array();
$adminArray = explode(',', $adminMail);


// 送信者名
$adminName = "メジョモ";


// 送信後に戻るURL
$returnUrl = "https://www.olp.co.jp/medical/";


// 送信完了メッセージ
$completionMessage = <<<EOD
デイワークの受け付けを完了いたしました。

ご登録いただいた情報を元に、オススメの求人情報をお届けいたします。


株式会社オープンループパートナーズ　メディカル新宿支店
TEL：03-5368-6545
営業時間　平日10：00～18：00
EOD
;

// リターンメールのメールタイトル
$returnMailTitle = "デイワーク登録フォームを受け付けました。";

// リターンメールのヘッダーメッセージ
$returnMailHeader = <<<EOD
この度は、「メジョモ」へデイワークの登録をいただきまして、誠にありがとうございます。

ご登録いただいた内容を元に、デイワークの仕組みでご勤務いただける求人情報を随時お送りいたしますので、
しばらくお待ちくださいますようお願いいたします。


お急ぎの場合ですが、下記までお電話にてお問い合わせください。

よろしくお願いします。


EOD
;


// リターンメールのフッターメッセージ
$returnMailFooter = <<<EOD

━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社オープンループパートナーズ　メディカル新宿支店
TEL：03-5368-6545
営業時間　平日10：00～18：00

URL　https://www.olp.co.jp/medical/
━━━━━━━━━━━━━━━━━━━━━━━━━━

EOD
;

// ----------基本設定終了---------- //


// ----------添付ファイル設定開始---------- //

// 拡張子制限（0=しない・1=する）
$ext_denied = 0;
// 許可する拡張子リスト
$ext_allow1 = "jpg";
$ext_allow2 = "jpeg";
$ext_allow3 = "gif";
$ext_allow4 = "pdf";
// 配列に格納しておく
$EXT_ALLOWS = array($ext_allow1, $ext_allow2, $ext_allow3, $ext_allow4);

// アップロード容量制限（0=しない・1=する）
$maxmemory = 1;
// 最大容量（KB）
$max = 3000;

// ----------添付ファイル設定終了---------- //


// ----------ここから下は変更不要---------- //

require_once(__DIR__ . "/../lib/functions.php");
require_once(__DIR__ . "/autoload.php");

session_start();
