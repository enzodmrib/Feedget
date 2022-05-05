import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacksRepository";

//Class that uses FeedbacksRepository to create the data of a feedback, but using prisma as the dependency
export class PrismaFeedbacksRepository implements FeedbacksRepository {
    //create() function from FeedbacksRepository, uses FeedbackCreateData
    async create({ type, comment, screenshot }: FeedbackCreateData){
        //create() function from prisma
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
}