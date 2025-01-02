import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ParentProfile {
  full_name: string;
  email: string;
  children_count: number;
  country: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<ParentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/');
        return;
      }
      
      fetchProfile();
    };

    checkAuth();
  }, [navigate]);

  const fetchProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from('parent_profiles')
        .select('*')
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-pink"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-custom-mint/20 py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome, {profile?.full_name}!</h1>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Profile Information</h2>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>
                  <p className="text-gray-900">{profile?.full_name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="text-gray-900">{profile?.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Number of Children</label>
                  <p className="text-gray-900">{profile?.children_count}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Country</label>
                  <p className="text-gray-900">{profile?.country}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => navigate('/')}
                className="bg-custom-pink hover:bg-custom-pink/90"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;