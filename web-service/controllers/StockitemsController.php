<?php
namespace app\controllers;

use yii\rest\ActiveController;
class StockitemsController extends ActiveController
{
    public $modelClass = 'app\models\Stockitems';
    
    public function behaviors()
    {
        return 
        \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
    }
}
