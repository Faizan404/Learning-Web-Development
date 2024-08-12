<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once "/src/App/Main.php";

$app = new App\Main();
$app->greet();
// require_once dirname(__FILE__)."/src/App/Main.php";
