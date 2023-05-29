import { BaseDTO } from '../../../utils/types/base-dto';

export class StorageBoxTypeDTO extends BaseDTO {
  name: string;
  height: number;
  width: number;
  depth: number;
  capacity: number;
  status: string;
}
