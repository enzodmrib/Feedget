//Repository global layer
//Creates the data type of a Feedback
export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

//Creates the function to create Feedback, in which the data will have the feedback properties
export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}

