import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterRegion.home.title' },
        loadChildren: () => import('./siaWebJhipster/region/region.module').then(m => m.SiaWebJhipsterRegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterCountry.home.title' },
        loadChildren: () => import('./siaWebJhipster/country/country.module').then(m => m.SiaWebJhipsterCountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterLocation.home.title' },
        loadChildren: () => import('./siaWebJhipster/location/location.module').then(m => m.SiaWebJhipsterLocationModule),
      },
      {
        path: 'department',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterDepartment.home.title' },
        loadChildren: () => import('./siaWebJhipster/department/department.module').then(m => m.SiaWebJhipsterDepartmentModule),
      },
      {
        path: 'task',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterTask.home.title' },
        loadChildren: () => import('./siaWebJhipster/task/task.module').then(m => m.SiaWebJhipsterTaskModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterEmployee.home.title' },
        loadChildren: () => import('./siaWebJhipster/employee/employee.module').then(m => m.SiaWebJhipsterEmployeeModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterJob.home.title' },
        loadChildren: () => import('./siaWebJhipster/job/job.module').then(m => m.SiaWebJhipsterJobModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'siaWebJhipsterApp.siaWebJhipsterJobHistory.home.title' },
        loadChildren: () => import('./siaWebJhipster/job-history/job-history.module').then(m => m.SiaWebJhipsterJobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
