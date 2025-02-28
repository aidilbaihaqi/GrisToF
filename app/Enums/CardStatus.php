<?php

namespace App\Enums;

enum CardStatus: string
{
  case TODO = 'Todo';
  case INPROGRESS = 'In Progress';
  case ONREVIEW = 'On Review';
  case DONE = 'DONE';

  public static function options(): array
  {
    return collect(self::cases())->map(fn($item) => [
      'value' => $item->value,
      'label' => $item->name
    ])->values()->toArray();
  }
}