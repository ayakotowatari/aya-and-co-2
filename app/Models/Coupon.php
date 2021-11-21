<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    //
    protected $guarded =[];

    protected $appends = [
        'coupon_info',
        'target_name',
    ];

    public function getCouponInfoAttribute()
    {
        if($this->type == 'fixed'){
            return '商品のお買い上げ金額から'.$this->value.'円引き';
        }else if($this->type == 'percent'){
            return '商品のお買い上げ金額の'.$this->percent_off.'%引き';
        }else{
            return '送料が無料';
        }

    }

    public function getTargetNameAttribute()
    {
        if($this->target == '0'){
            return '個別';
        }else{
            return '全員';
        }

    }

    public function users(){
        return $this->belongsToMany('App\User');
    }

    public function status(){
        return $this->hasOne('App\Models\Status');
    }
    
}
