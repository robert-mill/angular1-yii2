<?php
namespace app\models;
use Yii;


/**
 * This is the model class for table "stock_items".
 *
 * @property integer $id
 * @property string $firstname
 * @property string $lastname
 * @property string $email
 * @property string $phone
 * @property string $pass
 * @property string $add
 * @property string $city
 */
class Members extends \yii\db\ActiveRecord
{
    /**
     * @return string
     */
    public static function tableName()
    {
        return  'member';
    }

    /**
     * @return array
     */
    public function rules()
    {
        return [
            [['firstname', 'lastname', 'email', 'phone', 'pass', 'add', 'city' ], 'required'],
            [['firstname', 'lastname', 'email', 'phone', 'pass', 'add', 'city'], 'string'],
            [['firstname', 'lastname'], 'string', 'max' => 255],
            [['email','pass'], 'string', 'max' => 200],
            [['phone'], 'string', 'max' => 20],
            [['add','city'], 'string', 'max' => 100],

        ];
    }
    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'firstname' => 'Firstname',
            'lastname' => 'Title',
            'email' => 'Email',
            'phone' => 'Phone',
            'pass' => 'Pass',
            'add' => 'Add',
            'city' => 'City',
        ];
    }
}