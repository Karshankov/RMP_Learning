import { request, gql } from 'graphql-request';
const MASTER_URL =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clptl60df3jdt01unbf667028/master';

export const getCourseList = async (level, content) => {
  const query =
    gql`
    query CourseList {
      courses(where: {courseLevel: ` +
    level +
    `}) {
        id
        name
        time
        tags
        courseLevel
        author
        description {
          markdown
        }
        banner {
          url
        }
        chapters {
          content {
            heading
            output {
              markdown
              html
            }
            description {
              markdown
              html
            }
          }
          title
          id
        }
        
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "` +
    courseId +
    `", 
      userEmail: "` +
    userEmail +
    `", course: {connect: {id: "` +
    courseId +
    `"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const query =
    gql`
  query GetUserEnrolledCourse {
    userEnrolledCourses(
      where: {courseId: "` +
    courseId +
    `", 
        userEmail: "` +
    userEmail +
    `"}
    ) {
      id
      courseId
      completedChapter {
        chapterId
      }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
