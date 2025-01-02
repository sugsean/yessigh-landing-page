export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      class_groups: {
        Row: {
          academic_year: string
          class_name: string
          created_at: string | null
          grade_level: string
          id: string
          teacher_id: string | null
        }
        Insert: {
          academic_year: string
          class_name: string
          created_at?: string | null
          grade_level: string
          id?: string
          teacher_id?: string | null
        }
        Update: {
          academic_year?: string
          class_name?: string
          created_at?: string | null
          grade_level?: string
          id?: string
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "class_groups_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      message_threads: {
        Row: {
          created_at: string | null
          id: string
          subject: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          subject?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          subject?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_read: boolean | null
          recipient_id: string
          sender_id: string
          subject: string | null
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          recipient_id: string
          sender_id: string
          subject?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          recipient_id?: string
          sender_id?: string
          subject?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_profiles: {
        Row: {
          children_count: number | null
          country: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          children_count?: number | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          children_count?: number | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          created_at: string | null
          id: string
          permissions: Json
          role_name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          permissions: Json
          role_name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          permissions?: Json
          role_name?: string
        }
        Relationships: []
      }
      secrets: {
        Row: {
          created_at: string | null
          id: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      signups: {
        Row: {
          children_count: number | null
          country: string
          created_at: string
          email: string
          id: string
          name: string
          position: string | null
          school: string | null
          user_type: string
        }
        Insert: {
          children_count?: number | null
          country: string
          created_at?: string
          email: string
          id?: string
          name: string
          position?: string | null
          school?: string | null
          user_type: string
        }
        Update: {
          children_count?: number | null
          country?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          position?: string | null
          school?: string | null
          user_type?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          class_group: string | null
          connection_score: number | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          grade: string
          id: string
          name: string
          notes: string | null
          parent_email: string | null
          wellbeing_status: string | null
        }
        Insert: {
          class_group?: string | null
          connection_score?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          grade: string
          id?: string
          name: string
          notes?: string | null
          parent_email?: string | null
          wellbeing_status?: string | null
        }
        Update: {
          class_group?: string | null
          connection_score?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          grade?: string
          id?: string
          name?: string
          notes?: string | null
          parent_email?: string | null
          wellbeing_status?: string | null
        }
        Relationships: []
      }
      "teacher data": {
        Row: {
          created_at: string
          email: string | null
          id: string
          "is active": boolean | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          "is active"?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          "is active"?: boolean | null
        }
        Relationships: []
      }
      teacher_data: {
        Row: {
          availability_hours: Json | null
          avatar_url: string | null
          certifications: string[] | null
          class_name: string | null
          class_schedule: Json | null
          classroom_achievements: string[] | null
          contact_details: Json | null
          created_at: string
          department: string | null
          email: string | null
          emergency_contact: Json | null
          expertise: string[] | null
          full_name: string | null
          grade_level: string | null
          id: string
          is_active: boolean | null
          languages_spoken: string[] | null
          last_check_in: string | null
          mentoring_relationships: Json | null
          pd_points: number | null
          performance_metrics: Json | null
          phone_number: string | null
          preferred_subjects: string[] | null
          professional_development: string[] | null
          professional_goals: string[] | null
          recent_achievements: Json | null
          role: string | null
          specialization: string[] | null
          subject: string | null
          teaching_certifications: Json | null
          teaching_philosophy: string | null
          teaching_preferences: Json | null
          teaching_style: string | null
          years_experience: number | null
        }
        Insert: {
          availability_hours?: Json | null
          avatar_url?: string | null
          certifications?: string[] | null
          class_name?: string | null
          class_schedule?: Json | null
          classroom_achievements?: string[] | null
          contact_details?: Json | null
          created_at?: string
          department?: string | null
          email?: string | null
          emergency_contact?: Json | null
          expertise?: string[] | null
          full_name?: string | null
          grade_level?: string | null
          id?: string
          is_active?: boolean | null
          languages_spoken?: string[] | null
          last_check_in?: string | null
          mentoring_relationships?: Json | null
          pd_points?: number | null
          performance_metrics?: Json | null
          phone_number?: string | null
          preferred_subjects?: string[] | null
          professional_development?: string[] | null
          professional_goals?: string[] | null
          recent_achievements?: Json | null
          role?: string | null
          specialization?: string[] | null
          subject?: string | null
          teaching_certifications?: Json | null
          teaching_philosophy?: string | null
          teaching_preferences?: Json | null
          teaching_style?: string | null
          years_experience?: number | null
        }
        Update: {
          availability_hours?: Json | null
          avatar_url?: string | null
          certifications?: string[] | null
          class_name?: string | null
          class_schedule?: Json | null
          classroom_achievements?: string[] | null
          contact_details?: Json | null
          created_at?: string
          department?: string | null
          email?: string | null
          emergency_contact?: Json | null
          expertise?: string[] | null
          full_name?: string | null
          grade_level?: string | null
          id?: string
          is_active?: boolean | null
          languages_spoken?: string[] | null
          last_check_in?: string | null
          mentoring_relationships?: Json | null
          pd_points?: number | null
          performance_metrics?: Json | null
          phone_number?: string | null
          preferred_subjects?: string[] | null
          professional_development?: string[] | null
          professional_goals?: string[] | null
          recent_achievements?: Json | null
          role?: string | null
          specialization?: string[] | null
          subject?: string | null
          teaching_certifications?: Json | null
          teaching_philosophy?: string | null
          teaching_preferences?: Json | null
          teaching_style?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      teacher_feedback: {
        Row: {
          areas_of_improvement: string[] | null
          comments: string | null
          created_at: string | null
          feedback_type: string
          follow_up_date: string | null
          id: string
          observation_date: string | null
          observer_id: string | null
          rating: number | null
          strengths: string[] | null
          teacher_id: string | null
        }
        Insert: {
          areas_of_improvement?: string[] | null
          comments?: string | null
          created_at?: string | null
          feedback_type: string
          follow_up_date?: string | null
          id?: string
          observation_date?: string | null
          observer_id?: string | null
          rating?: number | null
          strengths?: string[] | null
          teacher_id?: string | null
        }
        Update: {
          areas_of_improvement?: string[] | null
          comments?: string | null
          created_at?: string | null
          feedback_type?: string
          follow_up_date?: string | null
          id?: string
          observation_date?: string | null
          observer_id?: string | null
          rating?: number | null
          strengths?: string[] | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_feedback_observer_id_fkey"
            columns: ["observer_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_feedback_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_observations: {
        Row: {
          action_items: string[] | null
          category: string | null
          follow_up_date: string | null
          id: string
          notes: string | null
          observation_date: string | null
          observer: string | null
          teacher_id: string | null
        }
        Insert: {
          action_items?: string[] | null
          category?: string | null
          follow_up_date?: string | null
          id?: string
          notes?: string | null
          observation_date?: string | null
          observer?: string | null
          teacher_id?: string | null
        }
        Update: {
          action_items?: string[] | null
          category?: string | null
          follow_up_date?: string | null
          id?: string
          notes?: string | null
          observation_date?: string | null
          observer?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_observations_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_professional_development: {
        Row: {
          certification_deadline: string | null
          completion_date: string | null
          completion_status: string | null
          created_at: string | null
          credits_earned: number | null
          id: string
          notes: string | null
          teacher_id: string | null
          training_type: string
          updated_at: string | null
        }
        Insert: {
          certification_deadline?: string | null
          completion_date?: string | null
          completion_status?: string | null
          created_at?: string | null
          credits_earned?: number | null
          id?: string
          notes?: string | null
          teacher_id?: string | null
          training_type: string
          updated_at?: string | null
        }
        Update: {
          certification_deadline?: string | null
          completion_date?: string | null
          completion_status?: string | null
          created_at?: string | null
          credits_earned?: number | null
          id?: string
          notes?: string | null
          teacher_id?: string | null
          training_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_professional_development_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_student_relationships: {
        Row: {
          created_at: string | null
          id: string
          relationship_type: string | null
          student_id: string | null
          teacher_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          relationship_type?: string | null
          student_id?: string | null
          teacher_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          relationship_type?: string | null
          student_id?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_student_relationships_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_student_relationships_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
      thread_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          sender_id: string | null
          thread_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          thread_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          sender_id?: string | null
          thread_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "thread_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "thread_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "message_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      thread_participants: {
        Row: {
          created_at: string | null
          last_read_at: string | null
          participant_id: string
          thread_id: string
        }
        Insert: {
          created_at?: string | null
          last_read_at?: string | null
          participant_id: string
          thread_id: string
        }
        Update: {
          created_at?: string | null
          last_read_at?: string | null
          participant_id?: string
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "thread_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "thread_participants_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "message_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      wellbeing_insights: {
        Row: {
          assessment_date: string | null
          created_at: string | null
          id: string
          insight_type: string
          metric_value: number | null
          trend_direction: string | null
        }
        Insert: {
          assessment_date?: string | null
          created_at?: string | null
          id?: string
          insight_type: string
          metric_value?: number | null
          trend_direction?: string | null
        }
        Update: {
          assessment_date?: string | null
          created_at?: string | null
          id?: string
          insight_type?: string
          metric_value?: number | null
          trend_direction?: string | null
        }
        Relationships: []
      }
      wellbeing_metrics: {
        Row: {
          assessment_date: string | null
          created_at: string | null
          energy_level: number | null
          id: string
          stress_level: number | null
          student_engagement: number | null
          support_level: string | null
          teacher_id: string
          wellbeing_score: number | null
        }
        Insert: {
          assessment_date?: string | null
          created_at?: string | null
          energy_level?: number | null
          id?: string
          stress_level?: number | null
          student_engagement?: number | null
          support_level?: string | null
          teacher_id: string
          wellbeing_score?: number | null
        }
        Update: {
          assessment_date?: string | null
          created_at?: string | null
          energy_level?: number | null
          id?: string
          stress_level?: number | null
          student_engagement?: number | null
          support_level?: string | null
          teacher_id?: string
          wellbeing_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "wellbeing_metrics_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "teacher_data"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
