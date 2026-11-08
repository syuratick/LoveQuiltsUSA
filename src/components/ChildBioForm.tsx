import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import headerImg from '../assets/images/header.png';
import { getRecipientById, saveRecipient, type Recipient } from '../util/LoveQuiltAPI';

const EMPTY_FORM = {
  id: '',
  year: String(new Date().getFullYear()),
  month: '',
  name: '',
  age: '',
  theme: '',
  color: '',
  diagnosis: '',
  dueDate: '',
  story: '',
  numberOfSignups: '',
  profilePicture: '',
};

const ChildBioForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState<typeof EMPTY_FORM>(EMPTY_FORM);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isEdit || !id) return;
    setLoading(true);
    getRecipientById(id)
      .then((data: Recipient) => {
        setForm({
          id: data.id,
          year: data.year,
          month: data.month,
          name: data.name,
          age: data.age,
          theme: data.theme,
          color: data.color,
          diagnosis: data.diagnosis,
          dueDate: data.dueDate,
          story: data.story,
          numberOfSignups: data.numberOfSignups,
          profilePicture: data.profilePicture || '',
        });
        if (data.profilePicture) setPhotoPreview(data.profilePicture);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await saveRecipient({ ...form, ...(photoFile ? { photoFile } : {}) });
      setSuccess(true);
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="container py-5 text-center"><p className="text-muted">Loading...</p></div>;
  }

  return (
    <main className="signup-page">
      <div className="signup-banner">
        <img className="signup-banner-img" src={headerImg} alt="" aria-hidden="true" />
        <div className="signup-banner-overlay">
          <h1 className="signup-banner-title">
            {isEdit ? "Edit Child's Bio" : "Add New Child"}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="signup-card">
          <div className="text-center mb-4">
            <h2 className="signup-intro-heading">
              {isEdit ? "Update the child's information below." : 'Fill in the details to add a new child.'}
            </h2>
          </div>

          {error && (
            <div className="alert alert-danger mb-3">{error}</div>
          )}
          {success && (
            <div className="alert alert-success mb-3">Saved successfully! Redirecting…</div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Basic Info */}
            <h3 className="signup-section-title">Basic Information</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="signup-label">Name <span className="required">(Required)</span></label>
                <input type="text" name="name" className="signup-input"
                  placeholder="Child's first name" value={form.name}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <label className="signup-label">Age <span className="required">(Required)</span></label>
                <input type="number" name="age" className="signup-input"
                  placeholder="e.g. 8" min="3" max="18" value={form.age}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <label className="signup-label">Year <span className="required">(Required)</span></label>
                <input type="number" name="year" className="signup-input"
                  placeholder="e.g. 2026" value={form.year}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="signup-label">Diagnosis <span className="required">(Required)</span></label>
                <input type="text" name="diagnosis" className="signup-input"
                  placeholder="e.g. Leukemia" value={form.diagnosis}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="signup-label">Due Date <span className="required">(Required)</span></label>
                <input type="date" name="dueDate" className="signup-input"
                  value={form.dueDate} onChange={handleChange} required />
              </div>
            </div>

            {/* Quilt Details */}
            <h3 className="signup-section-title">Quilt Details</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="signup-label">Theme <span className="required">(Required)</span></label>
                <input type="text" name="theme" className="signup-input"
                  placeholder="e.g. Dinosaurs, Disney, Space" value={form.theme}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="signup-label">Favorite Colors <span className="required">(Required)</span></label>
                <input type="text" name="color" className="signup-input"
                  placeholder="e.g. Blue, Purple, Green" value={form.color}
                  onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="signup-label">Number of Signups Accepted <span className="required">(Required)</span></label>
                <input type="number" name="numberOfSignups" className="signup-input"
                  placeholder="e.g. 25" min="1" value={form.numberOfSignups}
                  onChange={handleChange} required />
              </div>
            </div>

            {/* Photo Upload */}
            <h3 className="signup-section-title">Photo</h3>
            <div className="mb-4">
              <div className="child-bio-photo-area" onClick={() => fileInputRef.current?.click()}>
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="child-bio-photo-preview" />
                ) : (
                  <div className="child-bio-photo-placeholder">
                    <span>&#128247;</span>
                    <p>Click to upload a photo</p>
                  </div>
                )}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*"
                className="d-none" onChange={handlePhoto} />
              {photoPreview && (
                <button type="button" className="child-bio-photo-remove"
                  onClick={() => { setPhotoFile(null); setPhotoPreview(''); }}>
                  Remove photo
                </button>
              )}
            </div>

            {/* Journey */}
            <h3 className="signup-section-title">Journey</h3>
            <div className="mb-4">
              <label className="signup-label">Child's Story <span className="required">(Required)</span></label>
              <textarea name="story" className="signup-textarea" rows={6}
                placeholder="Share the child's journey and story…"
                value={form.story} onChange={handleChange} required />
            </div>

            {/* Actions */}
            <div className="d-flex align-items-center justify-content-between mt-2">
              <Link to="/" className="directions-back">&larr; Cancel</Link>
              <button type="submit" className="btn-signup-submit" disabled={saving}>
                {saving ? 'Saving…' : isEdit ? 'Update Child' : 'Add Child'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
};

export default ChildBioForm;
