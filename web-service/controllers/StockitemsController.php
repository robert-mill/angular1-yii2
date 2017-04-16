<?php
namespace app\controllers;

use app\models\Stockitems;
use Yii;
use yii\rest\ActiveController;
class StockitemsController extends ActiveController
{
    public $modelClass = 'app\models\Stockitems';
    public $id = "Houses";
    public function actions()
    {
        $actions = parent::actions();

        unset($actions['delete'], $actions['create']);

        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }
    public function prepareDataProvider()
    {
        $this->id = "";
        $this->id = Yii::$app->request->get('category');
        $model = new Stockitems();
        if(!$this->id){
            $data = $model->find()->all();
        }else{
            $category = $this->id;
            $data = $model->find()->where(['category'=>"$category"])->all();

        }


        return $data;
    }


}
