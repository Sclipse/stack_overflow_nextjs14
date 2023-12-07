import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filters from "@/components/shared/Filters";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to use Next.js with TypeScript?",
    tags: [
      { _id: "tag1", name: "Next.js" },
      { _id: "tag2", name: "TypeScript" },
    ],
    author: { _id: "author1", name: "John Doe", picture: "john-doe.jpg" },
    upvotes: 25,
    views: 150,
    answers: [],
    createdAt: new Date("2023-01-01T12:00:00Z"),
  },
  {
    _id: "2",
    title: "Best practices for React state management?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag4", name: "State Management" },
    ],
    author: { _id: "author2", name: "Jane Smith", picture: "jane-smith.jpg" },
    upvotes: 30,
    views: 200,
    answers: [],
    createdAt: new Date("2023-02-15T08:30:00Z"),
  },
  {
    _id: "3",
    title: "Deploying a Next.js app on Vercel",
    tags: [
      { _id: "tag1", name: "Next.js" },
      { _id: "tag5", name: "Vercel" },
    ],
    author: { _id: "author3", name: "Bob Johnson", picture: "bob-johnson.jpg" },
    upvotes: 15,
    views: 100,
    answers: [],
    createdAt: new Date("2023-03-20T16:45:00Z"),
  },
  {
    _id: "4",
    title: "How to style components in React?",
    tags: [
      { _id: "tag3", name: "React" },
      { _id: "tag6", name: "Styling" },
    ],
    author: { _id: "author4", name: "Alice Brown", picture: "alice-brown.jpg" },
    upvotes: 20,
    views: 1200000,
    answers: [],
    createdAt: new Date("2023-04-10T10:15:00Z"),
  },
  {
    _id: "5",
    title: "Optimizing performance in a Next.js app",
    tags: [
      { _id: "tag1", name: "Next.js" },
      { _id: "tag7", name: "Performance" },
    ],
    author: {
      _id: "author5",
      name: "Charlie Green",
      picture: "charlie-green.jpg",
    },
    upvotes: 18,
    views: 180,
    answers: [],
    createdAt: new Date("2023-05-05T14:20:00Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no image to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
