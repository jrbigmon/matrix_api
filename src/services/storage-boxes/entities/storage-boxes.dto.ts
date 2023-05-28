import { BaseDTO } from '../../../utils/types/base-dto';

export interface StorageBoxDTO extends BaseDTO {
  number: string;
  status: string;
  typeId: number;
}
