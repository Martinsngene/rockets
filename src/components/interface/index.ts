/** @format */

export interface GlobalPropsI {
  header?: string;
  showHeader?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CardPropsI {
  name?: string;
  className?: string;
  description: string;
  linkLabel: string;
  imgUrl: string;
  link?: string;
}

export interface InputPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextAreaPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface SelectPropsI {
  id?: string;
  defaultValue: string;
  itemsList: string[];
  label?: string;
  labelStyles?: string;
}

export interface FeedBackPropsI {
  feedbackImage: string;
}
