import { STATUS } from "@/lib/utils"
import { Badge } from "@/resources/js/components/ui/badge";

export default function GetStatusBadge({status})
{
  const {TODO, INPROGRESS, UNREVIEW, DONE, UNKNOWN} = STATUS;
  let badge, text;
  switch(priority) {
    case TODO:
      badge = 'bg-red-500 hover-bg-red-600';
      text = URGENT;
      break;
    case INPROGRESS:
      badge = 'bg-yellow-500 hover-bg-yellow-600';
      text = HIGH;
      break;
    case UNREVIEW:
      badge = 'bg-blue-500 hover-bg-blue-600';
      text = MEDIUM;
      break;
    case DONE:
      badge = 'bg-green-500 hover-bg-green-600';
      text = LOW;
      break;
    default:
      badge = '';
      text = UNKNOWN;
      break;
  }

  return <Badge className={badge}>{text}</Badge>
}