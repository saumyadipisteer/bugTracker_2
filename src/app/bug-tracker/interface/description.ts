export interface Description {
  subject: string | null;
  severity: string | '--Select--';
  status: string | '--Select--';
  describeTheBug?: string | null;
  user?: string;
  createdOn?: string;
  lastUpdatedOn?: string;
  updatedBy?: string;
  taggedBy?: boolean;
  taggedByUser?: string;
}
