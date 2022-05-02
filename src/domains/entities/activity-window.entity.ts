import { ActivityEntity } from './activity.entity';

export class ActivityWindowEntity {
  private readonly _activities: ActivityEntity[];

  public get activities(): ActivityEntity[] {
    return this._activities;
  }

  addActivity(activity: ActivityEntity) {
    this.activities.push(activity);
    return this;
  }
}
