/** Interface for tasks */
export interface Task {

   /** id of the task (optional) */
   id?: number;

   /** Title for/information about the task */
   text: string;

   /** The day the task is */
   day: string;

   /** Should a reminder be set for this task */
   reminder: boolean;
}