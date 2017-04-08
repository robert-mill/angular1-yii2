<?php
namespace app\models;
use Yii;


/**
 * This is the model class for table "stock_items".
 *
 * @property integer $id
 * @property string $category
 * @property string $title
 * @property string $description
 * @property string $image
 * @property string $price
 * @property string $discountprice
 * @property integer $instock
 * @property string $size
 */
class Stockitems extends \yii\db\ActiveRecord
{
    /**
     * @return string
     */
    public static function tableName()
    {
        return  'stockitems';
    }

    /**
     * @return array
     */
    public function rules()
    {
        return [
            [['category', 'title', 'description', 'image', 'price'], 'required'],
            [['description'], 'string'],
            [['price', 'discountprice'], 'number'],
            [['instock'], 'integer'],
            [['category'], 'string', 'max' => 100],
            [['title'], 'string', 'max' => 250],
            [['image'], 'string', 'max' => 200],
            [['size'], 'string', 'max' => 10],

        ];
    }
    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'category' => 'Category',
            'title' => 'Title',
            'description' => 'Description',
            'image' => 'Image',
            'price' => 'Price',
            'discountprice' => 'Discountprice',
            'instock' => 'Instock',
            'size' => 'Size',
        ];
    }
}