import { ILocation } from 'app/entities/siaWebJhipster/location/location.model';

export interface IDepartment {
  id: number;
  departmentName?: string | null;
  location?: Pick<ILocation, 'id'> | null;
}

export type NewDepartment = Omit<IDepartment, 'id'> & { id: null };
