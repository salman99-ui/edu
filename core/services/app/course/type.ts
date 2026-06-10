type CourseData = {
  category: string;
  imgUrl: string;
  title: string;
  subTitile: string;
  progress: number;
};

type CourseCountResponse = {
  course_followed: number;
  course_active: number;
  course_completed: number;
};

type CourseResponseDataAPI = {
  data: CourseCountResponse;
  status: number;
};

type CourseAccountResponseAPI = {
  category: string;
  imgUrl: string;
  title: string;
  subTitile: string;
  progress: number;
};

type CourseAccountDataAPI = {
  data: CourseAccountResponseAPI[];
  status: number;
};

type CourseRecommendResponseAPI = {
  category: string;
  imgUrl: string;
  title: string;
  subTitile: string;
  progress: number;
};

type CourseRecommendDataAPI = {
  data: CourseRecommendResponseAPI[];
  status: number;
};

type CoursePayloadAPI = {
  search?: string;
  category?: string;
};

type CourseResponseAPI = {
  category: string;
  imgUrl: string;
  title: string;
  subTitile: string;
  progress: number;
};

type CourseDataAPI = {
  data: CourseData[];
  status: number;
};
