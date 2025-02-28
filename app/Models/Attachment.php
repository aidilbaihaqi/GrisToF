<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = [
        'user_id',
        'card_id',
        'file',
        'link',
        'name'
    ];
}
