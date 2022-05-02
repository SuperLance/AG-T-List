type LearningStatus = 'active' | 'archived';

export interface Learning {
  id: string;
  name: string;
  status: LearningStatus;
}

export interface CreateLearningForm {
  name: string;
  status: LearningStatus;
}
